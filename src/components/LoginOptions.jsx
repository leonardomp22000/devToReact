import LoginOptionButton from "./LoginOptionButton";
import Link from "next/link";

const loginOptions = [
  {
    logo: "/Icons/appleLogin.svg",
    option: "Apple",
  },
  {
    logo: "/Icons/facebookLogin.svg",
    option: "Facebook",
  },
  {
    logo: "/Icons/foremLogin.svg",
    option: "Forem",
  },
  {
    logo: "/Icons/gitHubLogin.svg",
    option: "GitHub",
  },
  {
    logo: "Icons/googleLogin.svg",
    option: "Google",
  },
  {
    logo: "Icons/xLogin.svg",
    option: "Twitter (X)",
  },
];

export default function LoginOptions({ isRegistered }) {
  return (
    <section>
      {loginOptions.map((option, index) => {
        const label = `${isRegistered ? "Continue with" : "Sign up with"} ${option.option}`;
        return (
          <div key={option.option - index} className="my-3">
            <LoginOptionButton option={label} logo={option.logo} />
          </div>
        );
      })}

      {!isRegistered && (
        <div className="my-3">
          <Link href={"/users/sign_up?state=email_signup"}>
            <LoginOptionButton
              option="Sign up with Email"
              logo="/Icons/email.svg" // Usa el ícono que desees
            />
          </Link>
        </div>
      )}
    </section>
  );
}
