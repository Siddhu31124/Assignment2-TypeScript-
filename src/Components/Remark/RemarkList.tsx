import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { observer } from "mobx-react";
import { useState } from "react";

import { RemarkLiStyle } from "./RemarkStyle";
import RemarkModalComponent from "../Modal/EditRemarkModal";
import ModalStore from "../../Store/ModalStore";
import { RemarkListHeaderStyle } from "./RemarkStyle";
import LeadsStore from "../../Store/LeadStore";
import RemarkModel from "../../Model/RemarkModel";

const ListOfRemark = observer(({ remark }: { remark: RemarkModel }) => {
  console.log(remark);
  const remarks = LeadsStore.activeLeadDetails?.remark;
  const [selectedData, setSelectedData] = useState<RemarkModel>();
  function handelEdit(remarkData: RemarkModel) {
    ModalStore.handelOpenEditModal();
    setSelectedData(remarkData);
  }
  if (remark.assignee !== undefined) {
    return (
      <li className={RemarkLiStyle}>
        {selectedData ? <RemarkModalComponent remark={remark} /> : ""}
        <div className={RemarkListHeaderStyle}>
          <p className="font-semibold text-green-700 flex gap-2">
            {remark.assignee.name}
            <img src={remark.assignee.profilePic} />
          </p>
          <div className=" flex space-x-2">
            <button
              onClick={() => handelEdit(remark)}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEdit size={14} />
            </button>
            <button
              onClick={() => remarks?.deleteRemark(remark.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrashAlt size={14} />
            </button>
          </div>
        </div>
        <p className="text-gray-600 mb-5">{remark.content}</p>
        <p className="self-end text-[12px] text-right">{remark.created}</p>
      </li>
    );
  }
});
export default ListOfRemark;
