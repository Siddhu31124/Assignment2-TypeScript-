import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { observer } from "mobx-react";
import { useState } from "react";

import { RemarkLiStyle } from "./RemarkStyle";
import RemarkModalComponent from "../Modal/EditRemarkModal";
import ModalStore from "../../Store/ModalStore";
import { RemarkListHeaderStyle } from "./RemarkStyle";
import RemarkStore from "../../Store/RemarkStore";
import RemarkEditModel from "../../Model/RemarkEditModel";

const ListOfRemark = observer(({ remark }: { remark: RemarkEditModel }) => {
  const [selectedData, setSelectedData] = useState();
  function handelEdit(remarkData) {
    ModalStore.handelOpenEditModal();
    setSelectedData(remarkData);
  }
  if (remark.assignessName !== undefined) {
    return (
      <li className={RemarkLiStyle}>
        {selectedData ? <RemarkModalComponent remark={remark} /> : ""}
        <div className={RemarkListHeaderStyle}>
          <p className="font-semibold text-green-700 flex gap-2">
            {remark.assignessName[0].name}
            <img src={remark.assignessName[0].profilePic} />
          </p>
          <div className=" flex space-x-2">
            <button
              onClick={() => handelEdit(remark)}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEdit size={14} />
            </button>
            <button
              onClick={() => RemarkStore.deleteRemark(remark.id)}
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
