import React from "react";
import { TextRender } from "./blocks/text/text";
import { Paragraph } from "./blocks/paragraph/paragraph";
import { Passthrough } from "./blocks/passthrough/passthrough";
import { HardBreak } from "./blocks/hard-break/hard-break";
import { Blockquote } from "./blocks/blockquote/blockquote";
import { Heading } from "./blocks/heading/heading";
import { OrderedList } from "./blocks/ordered-list/ordered-list";
import { BulletList } from "./blocks/bullet-list/bullet-list";
import { ListItem } from "./blocks/list-item/list-item";
import { DropDown } from "./blocks/drop-down/drop-down";
import { CodeBlock } from "./blocks/code-block/code-block";
import { Table } from "./blocks/table/table";
import { TableRow } from "./blocks/table/table-row";
import { TableCell } from "./blocks/table/table-cell";
import { TableHeader } from "./blocks/table/table-header";

export const mapping = {
  text: TextRender,
  paragraph: Paragraph,
  doc: Passthrough,
  dBlock: Passthrough,
  hardBreak: HardBreak,
  blockquote: Blockquote,
  heading: Heading,
  orderedList: OrderedList,
  bulletList: BulletList,
  listItem: ListItem,
  // dropDown: DropDown,
  // codeBlock: CodeBlock,
  // table: Table,
  // tableHeader: TableHeader,
  // tableRow: TableRow,
  // tableCell: TableCell,
  // "image": Image,
};

/**
 * Render a tip tap JSON node and all its children
 * @param {TipTapNode} node JSON node to render
 * @param {NodeHandlers} handlers a handler for each node type
 * @returns tree of components as react elements
 */
export default function BlockRender(props) {
  const { node } = props;
  // recursively render child content
  const children = [];
  node.content &&
    node.content.forEach((child, ix) => {
      children.push(<BlockRender node={child} key={`${child.type}-${ix}`} />);
    });
  // return empty if we are missing a handler for this type
  if (!(node.type in mapping)) {
    console.warn(`missing type`, node);
    return <></>;
  }
  // render the handler for this type
  const Handler = mapping[node.type];
  return <Handler node={node}>{children}</Handler>;
}

// interface Attrs {
//   readonly [attr: string]: any;
// }

// export interface TipTapNode {
//   type: string;
//   attrs?: Attrs;
//   marks?: Attrs[];
//   content?: TipTapNode[];
//   readonly [attr: string]: any;
// }

// export interface NodeProps {
//   children?: React.ReactNode;
//   node: TipTapNode;
// }

// export type NodeHandler = (props: NodeProps) => JSX.Element;

// export interface NodeHandlers {
//   readonly [attr: string]: NodeHandler;
// }
