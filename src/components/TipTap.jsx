import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { Guide } from "./Guide";
import { Menu } from "./Menu";

export const TipTap = () => {
  const [isWriting, setIsWriting] = useState(true);
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
        <Menu editor={editor} isWriting={isWriting} setIsWriting={setIsWriting}/>
        {isWriting ? <EditorContent editor={editor} /> : <Guide />}
{/*        
        {isWriting ? (
          <div>
            {" "}
            <EditorOptionsContainer
              editor={editor}
              setIsWriting={setIsWriting}
            />
            <EditorContent editor={editor} />
          </div>
        ) : (
          <Guide />
        )} */}
      </div>
    </>
  );
};
