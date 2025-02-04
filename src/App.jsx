import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import Callout from "./CalloutExtention";
import "./index.css"; 

function App() {
  const editor = useEditor({
    extensions: [StarterKit, Callout],
    content: "<p>Hello! Start typing your text here...</p>",
  });

  const addCallout = (type) => {
    if (editor) {
      editor.chain().focus().setCallout(type).run();
    }
  };

  return (
    <div className="app">
      <h1>React Tiptap Editor with Custom Callout</h1>

      <button onClick={() => addCallout("info")}>Add Info Callout</button>
      <button onClick={() => addCallout("warning")}>Add Warning Callout</button> 

      <EditorContent editor={editor} />
    </div>
  );
}

export default App;

