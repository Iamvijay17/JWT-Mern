import { useEffect } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { error },
    ...props
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, props);
  };

  console.log(watch("example"));

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, maxLength: 20 })} />
          <input {...register("age", { required: true })} />
          <input {...register("email")} />
          <input {...register("password")} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
