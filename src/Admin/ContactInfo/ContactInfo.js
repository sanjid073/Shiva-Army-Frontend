import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactInfo = () => {
  const [contactTexts, setContactTexts] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const [isUpdate, setIsUpdated] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/contact")
      .then((res) => res.json())
      .then((data) => setContactTexts(data));
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
          `http://localhost:5000/deleteContact/${id}`,
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
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Contact info Added!", "Review has been added!", "success");
          reset();
        } else {
        }
      });
  };

  return (
    <div className="analysis">
      <div className="from-section text-center">
        <h3 className="fw-bold text-center">UpDate your Contact Info</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.star && <span>Please type Number between 0-5</span>}
          <textarea
            name="Contact Phone Number"
            className="mb-3"
            placeholder="Contact Phone Number"
            cols="30"
            rows="2"
            {...register("contact_phone", { required: true })}
          ></textarea>
          <textarea
            name="Contact email"
            className="mb-3"
            placeholder="Contact email address"
            cols="30"
            rows="2"
            {...register("contact_email", { required: true })}
          ></textarea>
          <textarea
            name="Youtube link"
            className="mb-3"
            placeholder="Youtube Link"
            cols="30"
            rows="2"
            {...register("contact_youtube", { required: true })}
          ></textarea>
          <textarea
            name="Discord link"
            className="mb-3"
            placeholder="Discord link"
            cols="30"
            rows="2"
            {...register("contact_discord", { required: true })}
          ></textarea>
          
          <textarea
            name="Instagram link"
            className="mb-3"
            placeholder="Instagram link"
            cols="30"
            rows="2"
            {...register("contact_instagram", { required: true })}
          ></textarea>
          

          <input type="submit" />
        </form>
      </div>

      {contactTexts.map((contactTexts) => (
        <div className="about-info">
          <p>{contactTexts.contact_phone}</p>
          <p>{contactTexts.contact_email}</p>
          <p>{contactTexts.contact_youtube}</p>
          <p>{contactTexts.contact_discord}</p>
          <p>{contactTexts.contact_instagram}</p>
          
          <button
            onClick={() => deleteOrders(contactTexts._id)}
            className="btn btn-danger mt-2 "
          >
            Delete Contact Info
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
