import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const IntroText = () => {
  const [introTexts, setIntroTexts] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const [isUpdate, setIsUpdated] = useState(null);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/intro")
      .then((res) => res.json())
      .then((data) => setIntroTexts(data));
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
          `https://peaceful-scrubland-01312.herokuapp.com/deleteIntro/${id}`,
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
    fetch("https://peaceful-scrubland-01312.herokuapp.com/intro", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Intro Text Added!", "Review has been added!", "success");
          reset();
        } else {
        }
      });
  };

  return (
    <div className="analysis">
      <div className="from-section text-center">
        <h3 className="fw-bold text-center">UpDate your Intro Text</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.star && <span>Please type Number between 0-5</span>}
          <textarea
            name="intro_sub"
            className="mb-3"
            placeholder="Intro Sub Heading"
            cols="60"
            rows="8"
            {...register("intro_sub", { required: true })}
          ></textarea>

          <textarea
            name="address_box"
            id=""
            placeholder="Address_Box"
            cols="30"
            rows="2"
            {...register("address_box", { required: true })}
          ></textarea>

          <input type="submit" />
        </form>
      </div>

      {introTexts.map((introText) => (
        <div className="intro">
          <p className="m-0">{introText.intro_sub}</p>
          <div className="mx-auto address mt-0">
            <div className="address-box mx-auto ">
              {introText.address_box}
              {/* 0xc748673057861a797275CD8A068AbB95A9 */}
            </div>
          </div>
          <button
            onClick={() => deleteOrders(introText._id)}
            className="btn btn-danger mt-2 "
          >
            Delete Intro Text and Address
          </button>
        </div>
      ))}
    </div>
  );
};

export default IntroText;
