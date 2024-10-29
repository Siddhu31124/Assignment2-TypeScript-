import { makeAutoObservable } from "mobx";
class _ModalStore {
  isAddModelOpen: boolean;
  isEditModelOpen: boolean;
  constructor() {
    this.isAddModelOpen = false;
    this.isEditModelOpen = false;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  handelOpenAddModal() {
    this.isAddModelOpen = true;
  }

  handelCloseAddModal() {
    this.isAddModelOpen = false;
  }
  handelOpenEditModal() {
    this.isEditModelOpen = true;
  }

  handelCloseEditModal() {
    this.isEditModelOpen = false;
  }
}
const ModalStore = new _ModalStore();
export default ModalStore;
