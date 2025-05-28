import CardBase from "./CardBase";
import Button from "./Button";
import Link from "next/link";
export default function CardLogIn() {
  return (
    <CardBase>
      <div className="flex flex-col gap-3">
        <h2 className="text-primary-title text-start font-sans text-xl font-bold">
          DEV Community is a community of 2,969,160 amazing developers
        </h2>

        <p>
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <div className="flex w-full flex-col items-center gap-1">
          <Link href="/auth?state=new-user">
            <Button className="w-full" variant="outlined">
              Create account
            </Button>
          </Link>
          <Link className="hidden md:block" href="/auth">
            <Button className="w-full" variant="text">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </CardBase>
  );
}
