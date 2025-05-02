import InputTitlePost from "./InputTitlePost";
import { Form, Formik } from "formik";
import { postSchema } from "@/hooks/validationSchemas";
import ActionBarPost from "@/components/ActionBarPost";
import BodyPostInput from "@/components/BodyPostInput";
import Button from "./Button";
export default function PostForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
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
              Publish
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
