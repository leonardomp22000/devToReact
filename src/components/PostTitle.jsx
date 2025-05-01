import Button from "./Button";
import CardBase from "./CardBase";
import InputTitlePost from "./InputTitlePost";
import { Form, Formik } from "formik";
import { postSchema } from "@/hooks/validationSchemas";

export default function PostTitle() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <CardBase className="!sm:p-2 md:px-9 md:py-6">
      <Formik
        initialValues={{ title: "", body: "" }}
        validationSchema={postSchema}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
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

            <div className="max-w-2xl">
              <Button
                className="w-full border-gray-400 text-black/80 sm:w-fit"
                variant="outlined"
              >
                Add a cover image
              </Button>
            </div>

            <InputTitlePost
              name="title"
              placeholder="New post title here..."
            ></InputTitlePost>

            <p className="text-black/60">Add up to 4 tags</p>
          </Form>
        )}
      </Formik>
    </CardBase>
  );
}
