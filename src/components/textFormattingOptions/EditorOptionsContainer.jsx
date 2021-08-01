import { useState } from "react";
import { Modal } from "../Modal";
import { AddImageBtn } from "./AddImageBtn";
import { AddMemeBtn } from "./AddMemeBtn";
import { TextStyleButtons } from "./TextStyleButtons";

export const EditorOptionsContainer = ({ editor }) => {
  const [showModal, setShowModal] = useState("");
  const [modalType, setModalType] = useState("");
  return (
    <>
      <div className="editing-options-container">
        <TextStyleButtons
          editor={editor}
          setShowModal={setShowModal}
          setModalType={setModalType}
        />
        <AddImageBtn
          editor={editor}
          setShowModal={setShowModal}
          setModalType={setModalType}
        />
        <AddMemeBtn editor={editor} />
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
