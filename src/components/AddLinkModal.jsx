import { useState } from "react";

export const AddLinkModal = ({
  editor,
  showModal,
  setShowModal,
  modalType,
}) => {
  const [url, setUrl] = useState("");

  const addUrl = () => {
    editor.chain().setLink({ href: url }).focus().run();
    setUrl("");
    setShowModal("");
  };
  const addImage = () => {
    editor.chain().setImage({ src: url }).focus().run();
    setUrl("");
    setShowModal("");
  };
  return (
    <div className={`modal-wrapper ${showModal}`}>
      <div>
        <span>{modalType}</span>
        <button onClick={() => setShowModal("")}>X</button>
      </div>
      <div>
        <input value={url} type="text" onChange={(e) => setUrl(e.target.value)} />
      </div>
      <div>
        <button
          onClick={modalType === "Add image link here" ? addImage : addUrl}
        >
          Add
        </button>
      </div>
    </div>
  );
};
