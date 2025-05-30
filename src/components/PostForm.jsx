import InputTitlePost from "./InputTitlePost";
import { Form, Formik } from "formik";
import { postSchema } from "@/hooks/validationSchemas";
import ActionBarPost from "@/components/ActionBarPost";
import BodyPostInput from "@/components/BodyPostInput";
import Button from "./Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function PostForm({ isEdit }) {
  const router = useRouter();
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    if (isEdit) {
      const info = localStorage.getItem("postInfo");
      if (info) {
        setPostInfo(JSON.parse(info));
      }
      console.log(postInfo);
    } else {
      setPostInfo(null);
    }
  }, [isEdit]);

  const handleSubmit = async (values, { setErrors }) => {
    try {
      const token = localStorage.getItem("authToken");
      const picture = "Este es el link de la imagen";
      const dataAuth = { ...values, image: picture };
      if (!token) {
        setErrors({ general: "No autorizado" });
      }

      console.log(postInfo?.id);

      const endpoint = !isEdit
        ? `https://apidevto.onrender.com/post`
        : `https://apidevto.onrender.com/post/${postInfo?.id}`;
      const response = await fetch(endpoint, {
        method: !isEdit ? "POST" : "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(dataAuth),
      });
      const data = await response.json();
      if (!data.success) {
        setErrors({ general: "No autorizado" });
        return;
      }
      router.push("/");
      console.log("Datos guardados correctamente");
    } catch (error) {
      console.error("Error de conexion", error);
      setErrors({ general: "Error al conectar con el servidor" });
    }
  };
  if (isEdit && postInfo === null) return <p>Cargando...</p>;
  return (
    <Formik
      initialValues={{
        title: postInfo?.title || "",
        body: postInfo?.body || "",
      }}
      validationSchema={postSchema}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize
    >
      {({ errors, submitCount }) => (
        <Form className="flex flex-col gap-4">
          {submitCount > 0 && Object.keys(errors).length > 0 && (
            <div className="rounded bg-red-100 p-4 text-red-700">
              <ul className="list-disc pl-5">
                {Object.entries(errors).map(([field, message]) => (
                  <li key={field}>{message}</li>
                ))}
              </ul>
            </div>
          )}

          <InputTitlePost name="title" placeholder="New post title here..." />
          <div>
            <ActionBarPost />
          </div>

          <BodyPostInput
            name="body"
            placeholder="Write your post content here..."
          />
          <div className="flex gap-3">
            <Button type="submit" variant="contained">
              {isEdit ? "Update" : "Publish"}
            </Button>
            <Button type="button" variant="text">
              Save draft
            </Button>
            <Button type="button" variant="text" className="hidden sm:block">
              Revert changes
            </Button>
            <Button type="button" variant="text" className="block sm:hidden">
              Revert
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
