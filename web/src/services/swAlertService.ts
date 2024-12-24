import Swal from "sweetalert2";

export const simpleWarning = async (msg: string) => {

  await Swal.fire({
    title: 'Erro',
    text: msg,
    icon: 'warning',
    confirmButtonText: 'OK'
  });
}