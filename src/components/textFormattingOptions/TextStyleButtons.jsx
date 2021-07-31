export const TextStyleButtons = ({ editor }) => {

  const addLink = () => {
    const url = window.prompt("enter link url");
    if (url) {
      editor.chain().toggleLink({ href: url }).focus().run();
    }
  };
  
  return (
    <>
      <button
        className="btn-styling btn-bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        B
      </button>
      <button
        className="btn-styling btn-italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        I
      </button>
      <button
        className="btn-styling btn-underline"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        U
      </button>
      <button className="btn-styling btn-underline" onClick={addLink}>
        <i class="fas fa-link"></i>
      </button>
    </>
  );
};
