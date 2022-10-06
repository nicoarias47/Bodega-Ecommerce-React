export const CheckoutValidation = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexTel =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.lastName.trim()) {
    errors.lastName = "El campo 'Apellido' es requerido";
  } else if (!regexName.test(form.lastName.trim())) {
    errors.lastName =
      "El campo 'Apellido' solo acepta letras y espacios en blanco";
  }

  if (!form.tel.trim()) {
    errors.tel = "El campo 'Tel' es requerido";
  } else if (!regexTel.test(form.tel.trim())) {
    errors.tel =
      "El campo 'Tel' solo acepta numeros y es obligatorio el codigo de area";
  }

  if (!form.province.trim()) {
    errors.province = "El campo 'Provincia' es requerido";
  }

  if (!form.direction.trim()) {
    errors.direction = "El campo 'Dirección' es requerido";
  } else if (!regexName.test(form.direction.trim())) {
    errors.direction =
      "El campo 'Dirección' solo acepta letras y espacios en blanco";
  }

  if (!form.number.trim()) {
    errors.number = "El campo 'N°' es requerido";
  }

  return errors;
};
