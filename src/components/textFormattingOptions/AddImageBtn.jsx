export const AddImageBtn = ({ editor, setShowModal, setModalType }) => {
  const addImage = () => {
    //show modal to user to enter URL
    setShowModal("show");
    setModalType("Add image link here");
  };
  return (
    <button className="btn-styling" onClick={addImage}>
      <i class="fas fa-image"></i>
      <span className="tooltip-text">Add image</span>
    </button>
  );
};
