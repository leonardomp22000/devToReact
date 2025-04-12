import LoginOptionButton from "./LoginOptionButton";
import { EyeIcon } from "@heroicons/react/24/solid";
const loginOptions = [
  {
    logo: "/Icons/appleLogin.svg",
    option: "Continue with Apple",
  },
  {
    logo: "/Icons/facebookLogin.svg",
    option: "Continue with Facebook",
  },
  {
    logo: "/Icons/foremLogin.svg",
    option: "Continue with Forem",
  },
  {
    logo: "/Icons/gitHubLogin.svg",
    option: "Continue with GitHub",
  },
  {
    logo: "Icons/googleLogin.svg",
    option: "Continue with Google",
  },
  {
    logo: "Icons/xLogin.svg",
    option: "Continue with Twitter (X)",
  },
];

export default function LoginOptions() {
  return (
    <section>
      {loginOptions.map((option, index) => {
        return (
          <div key={option.option - index} className="my-3">
            <LoginOptionButton
              option={option.option}
              logo={option.logo}
            ></LoginOptionButton>
          </div>
        );
      })}
    </section>
  );
}
