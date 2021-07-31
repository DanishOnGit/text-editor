import { EditorContent } from "@tiptap/react";
import { Guide } from "./Guide";
import { EditorOptionsContainer } from "./textFormattingOptions";

export const Menu = ({ editor, isWriting, setIsWriting }) => {
  return (
    <div className="menu-bar" >
      <div className="mode-wrapper">
        <span className="mode" onClick={() => setIsWriting(true)}> <i class="fas fa-pen"></i> Write</span>
        <span className="mode" onClick={() => setIsWriting(false)}><i class="far fa-life-ring"></i> Guide</span>
      </div>
      {isWriting ? <EditorOptionsContainer editor={editor} /> : <div></div>}
     
    </div>
  );
};
