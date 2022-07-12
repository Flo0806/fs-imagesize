function getImageChilds(parent, options) {
  for (let child in parent.children) {
    if (
      parent.children[child].children &&
      parent.children[child].children.length > 0
    ) {
      getImageChilds(parent.children[child], options);
    }

    if (parent.children[child].type === "image") {
      const data = (parent.children[child].data = {});

      const props = (data.hProperties = {});
      props.width = options.width ? options.width : "100%";
    }
  }
}

function imageSize(options = {}) {
  return (node) => {
    for (let child in node.children) {
      getImageChilds(node.children[child], options);
    }
  };
}

module.exports = imageSize;
