import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { Guide } from "./Guide";
import { Menu } from "./Menu";

export const TextEditor = () => {
  const [isWriting, setIsWriting] = useState(true);

  //here we create an instance of the editor and use this throughout the app
  //we also include other extensions apart from StarterKit
  const editor = useEditor({
    extensions: [StarterKit, Placeholder, Link, Image, Underline],
    autofocus: "end",
  });
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="editor-wrapper">
        {/* Menu contains our text formatting options and guide */}
        <Menu
          editor={editor}
          isWriting={isWriting}
          setIsWriting={setIsWriting}
        />
        {/* here we toggle between EditorContent and guide depending on what user is viewing */}
        {isWriting ? <EditorContent editor={editor} /> : <Guide />}
      </div>
    </>
  );
};
