export const AddImageBtn = ({editor}) => {
  const addImage = () => {
    const url = window.prompt("enter image url");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };
  return (
    <button className="btn-styling add-image-btn" onClick={addImage}>
      Add Image
    </button>
  );
};
