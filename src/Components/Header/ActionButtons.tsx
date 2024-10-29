import { observer } from "mobx-react";

import { TfiWrite } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import toast from "react-hot-toast";
import ModalStore from "../../Store/ModalStore";

import {
  blueButtonStyles,
  greenButtonStyles,
  buttonIconStyle,
  actionContainer,
} from "./HeadersStyles";
import ModalComponent from "../Modal/AddRemarkModal";

function handelToast(type: string | number) {
  toast.success(`Lead Has Selected ${type}`);
}
function handelEditModal() {
  ModalStore.handelOpenAddModal();
  toast.success(`Lead Has Selected Remark`);
}

const ActionButtons = observer(() => {
  return (
    <div className={actionContainer}>
      <ModalComponent />
      <button className={blueButtonStyles} onClick={() => handelToast("Call")}>
        <IoCall className={buttonIconStyle} />
        Call
      </button>

      <button
        className={greenButtonStyles}
        onClick={() => handelToast("Whatsapp")}
      >
        <IoLogoWhatsapp className={buttonIconStyle} />
        Whatsapp
      </button>

      <button className={blueButtonStyles} onClick={handelEditModal}>
        <TfiWrite className={buttonIconStyle} />
        Remarks
      </button>

      <button className={blueButtonStyles} onClick={() => handelToast("Send")}>
        <IoIosSend className={buttonIconStyle} />
        Send
      </button>
    </div>
  );
});
export default ActionButtons;
