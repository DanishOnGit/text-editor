import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorOptionsContainer } from "./textFormattingOptions";


export const TipTap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Placeholder, Link, Image, Underline],
  });

  return (
    <>
      <EditorOptionsContainer/>
      <EditorContent editor={editor} />
    </>
  );
};
