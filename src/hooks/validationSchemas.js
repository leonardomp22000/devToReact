import * as Yup from "yup";
export const sign_upSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "El nombre debe ser de al menos 5 letras")
    .required("El nombre es obligatorio"),
  username: Yup.string()
    .min(5, "El nombre de usuario debe ser de al menos 5 letras")
    .required("El nombre de usuario es obligatorio"),
  email: Yup.string()
    .email("El email no es valido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .min(5, "La contraseña debe tener al menos 5 caracteres")
    .required("La contraseña es obligatoria"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("La contraseña es obligatoria"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("El email no es valido")
    .required("El email es obligatorio"),
  password: Yup.string().required("La contraseña es requerida"),
});
