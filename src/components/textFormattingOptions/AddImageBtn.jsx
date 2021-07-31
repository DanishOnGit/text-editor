export const AddImageBtn = ({editor,setShowModal,setModalType}) => {
  const addImage = () => {
    setShowModal("show");
    setModalType("Add image link here")
  };
  return (
    <button className="btn-styling" onClick={addImage}>
     <i class="fas fa-image"></i>
    </button>
  );
};
