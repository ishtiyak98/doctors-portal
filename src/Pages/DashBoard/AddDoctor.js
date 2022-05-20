import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../Shared/Spinner";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const [loading, setLoading] = useState(false);

  const { data: serviceNames, isLoading } = useQuery("serviceNames", () =>
    fetch(`http://localhost:5000/services`).then((res) => res.json())
  );

  if (isLoading || loading) {
    return <Spinner></Spinner>;
  }

  const imageStorageKey = "ee8d9ee0a6767472abb7ca8b30b16ac6";

  const handleAdd = (data) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    setLoading(true);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const imgPath = result.data.url;

          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgPath,
          };

          fetch("http://localhost:5000/addDoctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                setLoading(false);
                reset()
                toast.success("doctor inserted");
              } else {
                setLoading(false);
                toast.error("cannot add a doctor");
              }
            });
        }
      });
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="card w-11/12 lg:w-[600px] bg-base-100 shadow-xl">
          <div className="card card-body">
            <h2 className="text-2xl font-semibold text-center">ADD DOCTOR</h2>
            <form onSubmit={handleSubmit(handleAdd)}>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text text-base">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-accent w-full max-w-lg"
                  {...register("name", { required: true })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.name?.type === "required" && "Name is required"}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text text-base">Email</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-accent w-full max-w-lg"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.email?.type === "required" && "Email is required"}
                    {errors.email?.type === "pattern" && errors.email.message}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text text-base">Specialty</span>
                </label>

                <select
                  class="select select-bordered select-accent w-full max-w-lg"
                  {...register("specialty", {
                    required: true,
                  })}
                >
                  {serviceNames.map((name) => (
                    <option key={name._id} value={name.name}>
                      {name.name}
                    </option>
                  ))}
                </select>

                <label className="label">
                  <span className="label-text-alt text-red-500 ">
                    {errors.specialty?.type === "required" &&
                      "Specialty is required"}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text text-base">Image</span>
                </label>
                <input
                  type="file"
                  className="input w-full max-w-lg"
                  {...register("image", { required: true })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.image?.type === "required" && "Image is required"}
                  </span>
                </label>
              </div>

              <div className="my-3">
                <input
                  className="btn text-white w-full text-base font-normal"
                  type="submit"
                  value="ADD"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
