import { createPortal } from "react-dom";
import { useRef } from "react";
import { observer } from "mobx-react-lite";
import { v4 } from "uuid";
import dayjs from "dayjs";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Modal from "react-modal";
import ModalStore from "../../Store/ModalStore";
import { customStyles } from "./ModalStyle";
import LeadsStore from "../../Store/LeadStore";
import { SubmitButtonStyle, CloseButtonStyle } from "./ModalStyle";
import { DATE_TIME_FORMAT } from "../../Constants";
import { Remark } from "../../Types/CommonTypes";

const ModalContent = observer(() => {
  const [isTextareaEmpty, setIsTextareaEmpty] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { leadId } = useParams();
  const remarkMethod = LeadsStore.remark;

  function addReview() {
    const validTextArea =
      textAreaRef.current?.value !== undefined &&
      textAreaRef.current?.value !== "" &&
      leadId;
    if (validTextArea) {
      let remake = textAreaRef.current?.value;
      let remarkData: Remark = {
        id: v4(),
        content: remake,
        created: dayjs(new Date()).format(DATE_TIME_FORMAT),
        assignee: LeadsStore.selectedLeadDetails?.assignees,
      };
      setIsTextareaEmpty(false);
      remarkMethod?.setRemarks(remarkData);
      ModalStore.handelCloseAddModal();
    } else {
      setIsTextareaEmpty(true);
    }
  }
  return (
    <Modal isOpen={ModalStore.isAddModelOpen} style={customStyles}>
      <div className="flex flex-col gap-2">
        <h1 className="text-[20px] text-slate-800 ">Add Your Remarks</h1>
        {isTextareaEmpty ? <p className="text-red-500">Fill the Remark</p> : ""}
        <textarea
          cols={40}
          rows={10}
          placeholder=" Add Remarks"
          ref={textAreaRef}
          className="p-2 border-2 border-black"
          required
        ></textarea>
        <p className="self-end flex flex-row gap-3 ">
          <button className={SubmitButtonStyle} onClick={addReview}>
            Submit
          </button>
          <button
            className={CloseButtonStyle}
            onClick={ModalStore.handelCloseAddModal}
          >
            close
          </button>
        </p>
      </div>
    </Modal>
  );
});

const ModalComponent = () =>
  createPortal(<ModalContent />, document.getElementById("modal")!);

export default ModalComponent;
