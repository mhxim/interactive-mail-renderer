import React from "react";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Font } from "@react-email/font";
import { StyledButton } from "../button/button";

export const BasicMailLayout = ({ replyContentNode, fallbackNode, subdomain, workflowId, accessToken, spaceName, resources }) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
            format: "woff2",
          }}
          fontWeight={300}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
            format: "woff2",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
            format: "woff2",
          }}
          fontWeight={600}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <table
        cellSpacing={0}
        cellPadding={0}
        style={{ borderRadius: "4px", overflow: "hidden", width: "600px" }}
      >
        <tbody>
          <tr>
            <td>{replyContentNode}</td>
          </tr>
          <tr>
            <td style={{ height: "8px" }}></td>
          </tr>
          <tr>
            <td>{fallbackNode}</td>
          </tr>
          <tr>
            <td style={{ height: "14px" }}></td>
          </tr>
          <tr>
            <td>
              <StyledButton
                text={resources.openForm}
                href={`https://${subdomain}.projectx.com/respond/workflow/${workflowId}?accessToken=${accessToken}`}
              />
            </td>
          </tr>
          <tr>
            <td style={{ height: "8px" }}></td>
          </tr>
          <tr>
            <td style={{ color: "#6b7280" }}>{ resources.supportFrom } {spaceName}</td>
            <td style={{ textAlign: "right" }}>
              <a
                href="https://projectx.com"
                target="_blank"
                style={{ textDecoration: "none", color: "#6b7280" }}
              >
                { resources.poweredBy } projectx.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Html>
  );
}
