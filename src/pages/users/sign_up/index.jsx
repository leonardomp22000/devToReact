import CardBase from "@/components/CardBase";
import SignupForm from "@/components/SignupForm";

export default function signup() {
  return (
    <section>
      <CardBase className="mx-auto mt-10 mb-4 flex max-w-xl flex-col gap-5">
        <h1 className="font-sans text-lg font-semibold text-black/80">
          Create your account
        </h1>

        <SignupForm></SignupForm>
      </CardBase>
    </section>
  );
}
