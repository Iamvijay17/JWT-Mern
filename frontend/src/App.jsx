import { useForm } from "react-hook-form";
import api from "./services/api";

function App() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      const response = api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      console.log("response", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <input
          {...register("name")}
          placeholder="Name"
          value={"vijay"}
          className="border border-gray-400 rounded px-3 py-2 outline-none focus:border-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">Name is required</p>
        )}

        <input
          type="number"
          value={24}
          {...register("age")}
          placeholder="Age"
          className="border border-gray-400 rounded px-3 py-2 outline-none focus:border-blue-500"
        />
        {errors.age && <p className="text-red-500 text-sm">Age is required</p>}

        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className="border border-gray-400 rounded px-3 py-2 outline-none focus:border-blue-500"
        />

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="border border-gray-400 rounded px-3 py-2 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
