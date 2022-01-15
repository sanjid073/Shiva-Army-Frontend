import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Review = () => {
  const [aboutTexts, setAboutTexts] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const [isUpdate, setIsUpdated] = useState(null);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/aboutText")
      .then((res) => res.json())
      .then((data) => setAboutTexts(data));
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
          `https://peaceful-scrubland-01312.herokuapp.com/deleteAboutText/${id}`,
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
    fetch("https://peaceful-scrubland-01312.herokuapp.com/aboutText", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("aboutText Added!", "Review has been added!", "success");
          reset();
        } else {
        }
      });
  };

  return (
    <div className="analysis">
      <div className="from-section text-center">
        <h3 className="fw-bold text-center">UpDate your About Text</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.star && <span>Please type Number between 0-5</span>}
          <textarea
            name="About text"
            id=""
            placeholder="About Text"
            cols="60"
            rows="8"
            {...register("about_text", { required: true })}
          ></textarea>

          <input type="submit" />
        </form>
      </div>

      {aboutTexts.map((aboutText) => (
        <div className="about-info">
          <p>{aboutText.about_text}</p>
          <button
            onClick={() => deleteOrders(aboutText._id)}
            className="btn btn-danger mt-2 "
          >
            Delete About text
          </button>
        </div>
      ))}
    </div>
  );
};

export default Review;
