import { useState } from "react";

export const Modal = ({ editor, showModal, setShowModal, modalType }) => {
  const [url, setUrl] = useState("");

  const addUrl = () => {
    //here we set the href as the Url value and then clear the input field and close modal
    editor.chain().setLink({ href: url }).focus().run();
    setUrl("");
    setShowModal("");
  };
  const addImage = () => {
    //here we set the image src as the Url value and then clear the input field and close modal
    editor.chain().setImage({ src: url }).focus().run();
    setUrl("");
    setShowModal("");
  };
  return (
    <>
      <div className={`modal-wrapper ${showModal}`}>
        <div className="modal-content-wrapper">
          <div>
            <span className="modal-title">{modalType}</span>
            <button className="close-btn" onClick={() => setShowModal("")}>
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div>
            <input
              className="url-input"
              value={url}
              type="text"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div>
            <button
              className="add-link-btn"
              onClick={modalType === "Add image link here" ? addImage : addUrl}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
