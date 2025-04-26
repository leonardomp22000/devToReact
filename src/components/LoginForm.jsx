import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4" action="">
      <Input type="email" label="Email" />
      <Input type="password" label="Password" />
      <div className="flex items-center justify-between">
        <Checkbox label="Remember me "></Checkbox>
        <a className="font-sans text-blue-700" href="#">
          Forgot password
        </a>
      </div>
      <Button className="bg-blue-700 text-white"> Log in</Button>
    </form>
  );
}
