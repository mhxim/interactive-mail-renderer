function getWorkflowContentMaxHeight(nodes) {
  let maxHeight = 52;
  for (let node of nodes) {
    let nodeHeight = 0;
    if (!node.data || (node.type != "multipleChoice" && node.type != "shortAnswer")) {
      continue;
    }

    nodeHeight += node.data.options?.length * (33 + 10);
    nodeHeight += 32 * Math.ceil((node.data.question?.length ?? 1) / 35) + 5;
    nodeHeight += 21 * Math.ceil((node.data.description?.length ?? 1) / 40) + 10;

    if (nodeHeight > maxHeight) {
      maxHeight = nodeHeight;
    }
  }

  return maxHeight;
}

function getHeightRecursive(node) {
  if (node.type == "doc") {
    let height = 0;
    for (const childNode of node.content) {
      height += getHeightRecursive(childNode);
    }

    return height;
  }

  if (node.type == "dBlock" || node.type == "listItem") {
    if (!node.content || node.content.length == 0) {
      return 21 + 10;
    }

    return getHeightRecursive(node.content[0]);
  }

  if (node.type == "bulletList" || node.type == "orderedList") {
    let height = 0;
    for (const childNode of node.content) {
      height += getHeightRecursive(childNode);
    }

    return height;
  }

  if (node.type == "dropDown") {
    // dropd  24* 2 if > 40  + 8 + 35 + 8
    let questionText = node.attrs.question;
    if (!questionText) {
      return 24 + 8 + 35 + 8;
    }

    return 24 * Math.ceil((questionText.length ?? 1) / 40) + 8 + 35 + 8;
  }

  if (node.type == "paragraph") {
    // p 21 * 2 if > 40
    if (!node.content || node.content.length == 0 || !node.content[0].text) {
      return 21 + 10;
    }

    let text = node.content[0].text;
    return 21 * Math.ceil((text.length ?? 1) / 40) + 10;
  }

  if (node.type == "heading") {
    if (!node.content || node.content.length == 0 || !node.content[0].text) {
      return 32 + 5;
    }

    let text = node.content[0].text;
    if (node.attrs.level == 1) {
      return 39.98 * Math.ceil((text.length ?? 1) / 17) + 10;
    } else if (node.attrs.level == 2) {
      return 31.98 * Math.ceil((text.length ?? 1) / 25) + 8;
    } else if (node.attrs.level == 3) {
      return 32 * Math.ceil((text.length ?? 1) / 35) + 5;
    }
  }

  return 0;
}