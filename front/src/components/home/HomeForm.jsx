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
          {...register("avatar", { required: true })}
          className="border"
          placeholder="Put img url here"
        />

        <label className="block">Full name</label>
        <input type="text" className="border" />

        <label className="block">Email Address</label>
        <input
          type="email"
          {...register("emailAddress", { required: true })}
          className="border"
          placeholder="example@email.com"
        />

        <label className="block">Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          className="border"
        />

        <label className="block">Github username</label>
        <input
          type="text"
          {...register("githubUsername", { required: true })}
          className="border"
          placeholder="@yourusername"
        />

        <input type="submit" className="border" value="Sign up" />
      </form>
    </>
  );
}

export default HomeForm;
