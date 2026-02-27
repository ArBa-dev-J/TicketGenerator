import { useForm } from "react-hook-form";

function HomeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      avatar: "",
      emailAddress: "",
      password: "",
      githubUsername: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <label className="block">Avatar</label>
        <input
          type="text"
          {...register("avatar", { required: true, pattern: "^https:\/\/[a-zA-Z0-9.-]+\/(v\d+\/)?hooks\/forms\/[a-zA-Z0-9_-]+$" })}
          className="border"
          placeholder="Put img url here"
        />
        {errors.avatar && (
          <p>Must be an url</p>
        )}
        <label className="block">Full name</label>
        <input type="text" {...register("name", { required: true, pattern: /^[A-Za-z]+(?:\s+[A-Za-z]+)$/ })} className="border" />
        {errors.name && (
          <p>Must contain first name and surname</p>
        )}
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
        <label className="block">Github username</label>
        <input
          type="text"
          {...register("githubUsername", { required: true, pattern: /^@[A-Za-z]+/  })}
          className="border"
          placeholder="@yourusername"
        />
        {errors.githubUsername && (
          <p>Must write @ before name</p>
        )}
        <input type="submit" className="border" value="Sign up" />
      </form>
    </>
  );
}

export default HomeForm;
