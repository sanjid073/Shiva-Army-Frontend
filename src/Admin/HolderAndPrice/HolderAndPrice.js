import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import pet from "../../imgs/Pet-Sticker-1.png";

const HolderAndPrice = () => {
  const [tokenomoics, setTokenomoics] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/tokenomoics")
      .then((res) => res.json())
      .then((data) => setTokenomoics(data));
  }, [isDelete]);
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
          `https://peaceful-scrubland-01312.herokuapp.com/deleteTokenomoics/${id}`,
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
    fetch("https://peaceful-scrubland-01312.herokuapp.com/tokenomoics", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire(
            "tokenomoics Added!",
            "HolderAndPrice has been added!",
            "success"
          );
          reset();
        } else {
        }
      });
  };

  return (
    <div className="analysis">
      <div className="from-section text-center">
        <h3 className="fw-bold text-center">UpDate your Holders And Price</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.star && <span>Please type Number between 0-5</span>}
          <input
            autoFocus
            placeholder="HOLDERS"
            {...register("holders", { required: true })}
          />
          <input
            placeholder="MARKET CAP"
            {...register("market_cap", { required: true })}
          />
          <input
            placeholder="CURRENT PRICE"
            {...register("current_price", { required: true })}
          />
          <input type="submit" />
        </form>
      </div>

      {tokenomoics.map((tokenomoic) => (
        <div className="row mx-auto Tokenomoics-info">
          <div className=" text-center">
            <div className="holders">
              <h3>{tokenomoic.holders}</h3>
              <p>HOLDERS</p>
            </div>
            <div className="market-cap">
              <h3>${tokenomoic.market_cap} Millions</h3>
              <p>MARKET CAP</p>
            </div>
            <div className="current-price">
              <h3>${tokenomoic.current_price}</h3>
              <p>CURRENT PRICE</p>
            </div>
            <button
              onClick={() => deleteOrders(tokenomoic._id)}
              className="btn btn-danger mt-2 "
            >
              Delete Holder And Price
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HolderAndPrice;
