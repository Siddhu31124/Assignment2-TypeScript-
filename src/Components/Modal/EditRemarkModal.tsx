import { createPortal } from "react-dom";
import { useRef } from "react";
import { v4 } from "uuid";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Modal from "react-modal";
import ModalStore from "../../Store/ModalStore";
import { customStyles } from "./ModalStyle";
import LeadsStore from "../../Store/LeadStore";
import { textArea } from "../../Types/CommonTypes";
import RemarkStore from "../../Store/RemarkStore";

const RemarkModal = observer(({ remark }: { remark: textArea }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { leadId } = useParams();

  function editReview() {
    const validTextArea =
      textAreaRef.current?.value !== undefined &&
      textAreaRef.current?.value !== "" &&
      leadId;
    if (validTextArea) {
      let remake = textAreaRef.current?.value;
      let remarkData = {
        leadId: leadId,
        id: v4(),
        content: remake,
        created: dayjs(new Date()).format("MM/DD/YY:hh:mm a"),
        assignessName: LeadsStore.selectedLeadDetails?.assignees,
      };
      RemarkStore.editRemark(remarkData);
      ModalStore.handelCloseEditModal();
    }
  }
  return (
    <Modal isOpen={ModalStore.isEditModelOpen} style={customStyles}>
      <div className="flex flex-col gap-2">
        <h1 className="text-[20px] text-slate-800 ">Add Your Remarks</h1>
        <textarea
          cols={40}
          rows={10}
          placeholder=" Add Remarks"
          ref={textAreaRef}
          className="p-2 border-2 border-black"
          defaultValue={remark.content}
          required
        ></textarea>
        <p className="self-end flex flex-row gap-3 ">
          <button
            className="bg-blue-600 text-basic rounded-lg py-1 px-2 hover:bg-blue-500 text-white"
            onClick={editReview}
          >
            Submit
          </button>
          <button
            className=" bg-red-500 text-basic rounded-lg py-1 px-2 hover:bg-red-600 text-white"
            onClick={ModalStore.handelCloseEditModal}
          >
            close
          </button>
        </p>
      </div>
    </Modal>
  );
});

const RemarkModalComponent = ({ remark }: { remark: textArea }) =>
  createPortal(
    <RemarkModal remark={remark} />,
    document.getElementById("modal")!
  );

export default RemarkModalComponent;