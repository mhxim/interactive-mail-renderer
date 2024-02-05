const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./protos/emailrender.proto";
import { renderToStaticMarkup } from "react-dom/server";
import { convert } from "html-to-text";

import BlockRender from "./src/components/BlockRender";
import { BasicMailLayout } from "./src/components/layouts/basic-mail-layout";
import { AmpForm } from "./src/components/amp/amp-form";
import { getWorkflowContentMaxHeight, getHeightRecursive } from "./utils/content"

const loaderOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDef = protoLoader.loadSync(PROTO_PATH, loaderOptions);
const grpcObj = grpc.loadPackageDefinition(packageDef);
const ourServer = new grpc.Server();



ourServer.addService(grpcObj.GrpcEmailRender.service, {
  RenderEmail: (emailRenderRequest, callback) => {
    const doctype =
      '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';

    const request = emailRenderRequest.request;
    let replyContent = JSON.parse(request.replyContentDocumentJson);
    let replyContentHeight = getHeightRecursive(replyContent) + 10;
    let workflowContent = JSON.parse(request.workflowDocumentJson);
    let workflowContentHeight = getWorkflowContentMaxHeight(workflowContent.nodes) + 14 + 32 + 8 + replyContentHeight;
    let successContent = JSON.parse(request.successDocumentJson);
    let successContentHeight = getHeightRecursive(successContent) + replyContentHeight;
    let fallbackContent = JSON.parse(request.fallbackDocumentJson);
    let fallbackContentHeight = getHeightRecursive(fallbackContent) + replyContentHeight;
    let resources = JSON.parse(request.resourcesJson);

    try {
      const ampMarkup = renderToStaticMarkup(
        <AmpForm
          workflowContentHeight={workflowContentHeight}
          successContentHeight={successContentHeight}
          fallbackContentHeight={fallbackContentHeight}
          replyContentNode={<BlockRender node={replyContent}></BlockRender>}
          successNode={<BlockRender node={successContent}></BlockRender>}
          fallbackNode={<BlockRender node={fallbackContent}></BlockRender>}
          accessToken={request.accessToken}
          spaceName={request.spaceName}
          workflowId={request.workflowId}
          subdomain={request.subdomain}
          resources={resources}
        ></AmpForm>
      );

      const amp = `<!doctype html>${ampMarkup}`;

      const htmlMarkup = renderToStaticMarkup(
        <BasicMailLayout
          accessToken={request.accessToken}
          spaceName={request.spaceName}
          workflowId={request.workflowId}
          subdomain={request.subdomain}
          replyContentNode={<BlockRender node={replyContent}></BlockRender>}
          fallbackNode={<BlockRender node={fallbackContent}></BlockRender>}
          resources={resources}
        ></BasicMailLayout>
      );
        
      // Needed when implementing Adaptive cards for Outlook
      // const html = `
      // ${doctype}
      // <head>
      //   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      //   <script type="application/adaptivecard+json">
      //     ${request.adaptiveCardSchema}
      //   </script>
      // </head>
      // ${htmlMarkup}`;

      const html = `
      ${doctype}
      ${htmlMarkup}`;

      const plain = convert(html, {
        selectors: [
          { selector: "img", format: "skip" },
          { selector: "#__react-email-preview", format: "skip" },
        ],
      });

      let response = {
        plainText: plain,
        html: html,
        ampHtml: amp,
      };

      callback(null, response);
    } catch (error) {
      console.log(error);
    }
  },
});

ourServer.bindAsync(
  "0.0.0.0:666",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("started");
    ourServer.start();
  }
);
