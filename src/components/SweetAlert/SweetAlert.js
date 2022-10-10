import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const SweetAlertRedirect = async ({ title, text }) => {
  return MySwal.fire({
    title: title,
    text: text,
    icon: "warning",
    color: "#b2936d",
    background: "#f4f4f4",
    showCancelButton: true,
    confirmButtonColor: "#b2936d",
    cancelButtonColor: "#7d7f81",
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      // utilizo js vanilla para redireccionar por que useNavigate y Navigate
      // me ocasionan un error junto con este sweet alert
      window.location.replace(`/login`);
    }
  });
};

export const SweetAlertWithCancel = async ({ title, text, confirm }) => {
  return MySwal.fire({
    title: title,
    text: text,
    icon: "warning",
    color: "#b2936d",
    background: "#f4f4f4",
    showCancelButton: true,
    confirmButtonColor: "#b2936d",
    cancelButtonColor: "#7d7f81",
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      confirm();
    }
  });
};

export const SweetAlertOnlyMsg = ({ title, text, footer }) => {
  return MySwal.fire({
    title: title,
    text: text,
    footer: footer,
    color: "#b2936d",
    background: "#f4f4f4",
    confirmButtonColor: "#b2936d",
    confirmButtonText: "Aceptar",
  });
};
