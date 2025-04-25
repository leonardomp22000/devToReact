import Button from "@/components/Button";
import Input from "@/components/Input";

export default function SignupForm() {
  return (
    <form action="" className="text-md flex flex-col gap-1.5 text-black/80">
      <p>Profile image</p>
      <div className="flex items-center gap-3.5 rounded-xl border border-black/10 p-3">
        <Button variant="outlined"> Seleccionar archivo</Button>
        <p className="text-black/75">Sin archivos seleccionados</p>
      </div>
      <Input
        type="text"
        label={
          <>
            Name <span className="text-red-500">*</span>
          </>
        }
      />
      <Input
        type="text"
        label={
          <>
            Username <span className="text-red-500">*</span>
          </>
        }
      />
      <Input
        type="email"
        label={
          <>
            Email <span className="text-red-500">*</span>
          </>
        }
      />
      <Input
        type="password"
        label={
          <>
            Password <span className="text-red-500">*</span>
          </>
        }
      />
      <Input
        type="password"
        label={
          <>
            Password Confirmation <span className="text-red-500">*</span>
          </>
        }
      />
      <div>
        <Button type="submit" variant="contained">
          Sign up
        </Button>
      </div>
    </form>
  );
}
