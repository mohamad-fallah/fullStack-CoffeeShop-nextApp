const swal = require("sweetalert");

const showSwal = (title, icon, buttons) => {
  swal({
    title,
    icon,
    buttons,
  });
};

export { showSwal };
