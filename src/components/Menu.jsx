import { useState } from "react";
import { Modal } from "./Modal";
import { EditorOptionsContainer } from "./textFormattingOptions";

export const Menu = ({ editor, isWriting, setIsWriting }) => {
  const [showModal, setShowModal] = useState("");
  const [modalType, setModalType] = useState("");
  return (
    <>
      <div className="menu-bar">
        <div className="mode-wrapper">
          <span
            className={isWriting ? "mode mode-active" : "mode"}
            onClick={() => setIsWriting(true)}
          >
            {" "}
            <i class="fas fa-pen"></i> Write
          </span>
          <span
            className={!isWriting ? "mode mode-active" : "mode"}
            onClick={() => setIsWriting(false)}
          >
            <i class="far fa-life-ring"></i> Guide
          </span>
        </div>
        {isWriting ? (
          <EditorOptionsContainer
            setShowModal={setShowModal}
            setModalType={setModalType}
            editor={editor}
          />
        ) : (
          <div></div>
        )}
      </div>
      <Modal
        editor={editor}
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
      />
    </>
  );
};
