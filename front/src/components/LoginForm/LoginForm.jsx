import { useForm } from "react-hook-form";


function LoginForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
          try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        "http://localhost:3000/api/v1/atendee/login",
        requestOptions,
      );
      if (response.ok) {
        reset();
      } else {
        throw new Error("error");
      }
    } catch (error) {
      alert(error.message);
    }
    }

    return (
        <>
            <section >
                <h1 className="text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                    <label className="block">Email Address</label>
                    <input
                        type="email"
                        {...register("emailAddress", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                        className="border"
                        placeholder="example@email.com"
                    />
                    {errors.emailAddress && (
                        <p>Must be an email</p>
                    )}
                    <label className="block">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className="border"
                    />
                    {errors.password && (
                        <p>Must write a password</p>
                    )}

                    <input type="submit" className="border" value="Login" />
                </form>
            </section>
        </>
    );
}

export default LoginForm;