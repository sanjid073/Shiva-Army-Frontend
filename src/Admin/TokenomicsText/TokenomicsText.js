import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const TokenomicsText = () => {
  const [tokenomoicsSubHeadingTexts, setTokenomoicsSubHeadingTexts] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const [isUpdate, setIsUpdated] = useState(null);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/tokenomoicsSubHeading")
      .then((res) => res.json())
      .then((data) => setTokenomoicsSubHeadingTexts(data));
  }, [isDelete, isUpdate]);
  const deleteOrders = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://peaceful-scrubland-01312.herokuapp.com/deleteTokenomoicsSubHeading/${id}`,
          {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setIsDelete(true);
            } else {
              console.log("fgdf");
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
              setIsDelete(false);
            }
          });
      }
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://peaceful-scrubland-01312.herokuapp.com/tokenomoicsSubHeading", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Tokenomoics SubHeading Added!", "Review has been added!", "success");
          reset();
        } else {
        }
      });
  };

  return (
    <div className="analysis">
      <div className="from-section text-center">
        <h3 className="fw-bold text-center">UpDate your Tokenomoics SubHeading</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.star && <span>Please type Number between 0-5</span>}
          <textarea
            name="tokenomoics_sub"
            className="mb-3"
            placeholder="Tokenomoics Sub Heading"
            cols="60"
            rows="4"
            {...register("tokenomoics_sub", { required: true })}
          ></textarea>

          <input type="submit" />
        </form>
      </div>

      {tokenomoicsSubHeadingTexts.map((tokenomoicsSubHeading) => (
        <div className="intro">
           <p className="m-0">
             {tokenomoicsSubHeading.tokenomoics_sub}
            </p>
            
          <button
            onClick={() => deleteOrders(tokenomoicsSubHeading._id)}
            className="btn btn-danger mt-2 "
          >
            Delete Intro Text and Address
          </button>
        </div>
      ))}
    </div>
  );
};

export default TokenomicsText;
