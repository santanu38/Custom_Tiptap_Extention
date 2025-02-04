import { Node } from "@tiptap/core";

// Custom Callout Extension
const Callout = Node.create({
  name: "callout",
  group: "block",
  content: "inline*", // Allow text inside callout

  addAttributes() {
    return {
      type: {
        default: "info", // Default callout type
        parseHTML: (element) => element.getAttribute("data-type"),//reads data type from html tag
        renderHTML: (attributes) => {//converts internal attributes back into data-type attributes for output
          return { "data-type": attributes.type };
        },
      },
    };
  },

  parseHTML(){
    return[
      {
        tag:"div.callout",
        getAttrs:(node)=>({
           type:node.getAttribute("data-type") || "info"
        }),
      },
    ]
  },

  renderHTML({ node }) {
    return [
      "div",
      {
        class: `callout callout-${node.attrs.type}`, // Dynamically set class
        "data-type": node.attrs.type,
      },
      0,
    ];
  },

  addCommands() {
    return {
      setCallout:
        (type = "info") =>
        ({ chain }) => {
          return chain()
            .insertContent(
              `<div class="callout callout-${type}" data-type="${type}">Callout text...</div>`
            )
            .focus()
            .run();
        },
    };
  },
});

export default Callout;

