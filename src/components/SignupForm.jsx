import Button from "@/components/Button";
import Input from "@/components/Input";
import { Formik, Form } from "formik";
import { sign_upSchema } from "@/hooks/validationSchemas";
import ImageUploader from "@/components/ImageUploader";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";

export default function SignupForm() {
  const router = useRouter();
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const endpoint = "http://localhost:8080/users";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!data.success) {
        setErrors({ general: "Usuario ya registrado" });
        toast.error("Error al registrar usuario");
        return;
      }

      toast.success("Usuario registrado exitosamente");
      router.push("http://localhost:3000/");
    } catch (error) {
      console.error("Error de conexion", error);
      setErrors({ general: "Error al conectar con el servidor" });
      toast.error("Ocurrio un error inesperado. Intentelo mas tarde");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{
        name: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        profilePic: "",
      }}
      validationSchema={sign_upSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue, errors }) => (
        <Form action="" className="text-md flex flex-col gap-1.5 text-black/80">
          <ImageUploader setFieldValue={setFieldValue} />

          <Input
            name="name"
            type="text"
            label={
              <>
                Name <span className="text-red-500">*</span>
              </>
            }
          />
          <Input
            name="username"
            type="text"
            label={
              <>
                Username <span className="text-red-500">*</span>
              </>
            }
          />
          <Input
            name="email"
            type="email"
            label={
              <>
                Email <span className="text-red-500">*</span>
              </>
            }
          />
          <Input
            name="password"
            type="password"
            label={
              <>
                Password <span className="text-red-500">*</span>
              </>
            }
          />
          <Input
            name="passwordConfirmation"
            type="password"
            label={
              <>
                Password Confirmation <span className="text-red-500">*</span>
              </>
            }
          />
          <div>
            <Button type="submit" variant="contained">
              {isSubmitting ? "Signing up" : "Sign up"}
            </Button>
          </div>
          {errors.general && (
            <div className="mt-2 text-sm text-red-500">{errors.general}</div>
          )}
          <Toaster position="bottom-right" reverseOrder={false} />
        </Form>
      )}
    </Formik>
  );
}
