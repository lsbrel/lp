import Swal from "sweetalert2";

export default class Response {
  static toastMessage(status, message) {
    return Swal.mixin({
      toast: true,
      icon: status ? "success" : "error",
      text: message,
      timer: 1500,
      showConfirmButton: false,
    }).fire();
  }
}
