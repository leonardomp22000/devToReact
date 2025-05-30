import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { Formik, Form } from "formik";
import { loginSchema } from "@/hooks/validationSchemas";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (values, { setErrors, setSubmitting }) => {
    try {
      const endpoint = "https://apidevto.onrender.com/auth/login";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!data.success) {
        setErrors({ general: "Credenciales invalidas" });
        return;
      }
      const token = data.data.token;
      localStorage.setItem("authToken", token);

      router.push("/?state=new");
    } catch (error) {
      console.error("Error de conexion", error);
      setErrors({ general: "Error al conectar con el servidor" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form className="flex flex-col gap-4" action="">
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Password" />
          <div className="flex items-center justify-between">
            <Checkbox label="Remember me "></Checkbox>
            <a className="font-sans text-blue-700" href="#">
              Forgot password
            </a>
          </div>
          {errors.general && (
            <div className="mt-2 text-sm text-red-500">{errors.general}</div>
          )}
          <Button type="submit" className="bg-blue-700 text-white">
            {" "}
            {isSubmitting ? "Logging in " : "Log in"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
