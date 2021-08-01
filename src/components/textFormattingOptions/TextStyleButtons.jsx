export const TextStyleButtons = ({ editor, setShowModal, setModalType }) => {
  const setLink = () => {
    setShowModal("show");
    setModalType("Add url here");
  };

  const unsetLink = () => {
    editor.chain().unsetLink().focus().run();
  };
 
  return (
    <div className="text-style-btns-wrapper">
      <button
        className={
          editor.isActive("bold")
            ? "btn-styling btn-bold isActive"
            : "btn-styling btn-bold"
        }
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        B  <span className="tooltip-text">Bold text</span>
      </button>
      <button
        className={
          editor.isActive("italic")
            ? "btn-styling btn-italic isActive"
            : "btn-styling btn-italic"
        }
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        I <span className="tooltip-text">Italic text</span>
      </button>
      <button
        className={
          editor.isActive("underline")
            ? "btn-styling btn-underline isActive"
            : "btn-styling btn-underline"
        }
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        U  <span className="tooltip-text">Underline text</span>
      </button>
      <button
        className={
          editor.isActive("link") ? "btn-styling isActive" : "btn-styling"
        }
        onClick={setLink}
      >
        <i class="fas fa-link"></i> <span className="tooltip-text">Hyperlink text</span>
      </button>
      {editor.isActive("link") && (
        <button className="btn-styling" onClick={unsetLink}>
          <i class="fas fa-unlink"></i> <span className="tooltip-text">Remove hyperlink</span>
        </button>
      )}
    </div>
  );
};
