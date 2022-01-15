import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Analysis.css"

const Review = () => {
    const [analysiss, setAnalysis] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    const [isUpdate, setIsUpdated] = useState(null);
    useEffect(() => {
      fetch("https://peaceful-scrubland-01312.herokuapp.com/analysis")
        .then((res) => res.json())
        .then((data) => setAnalysis(data));
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
          fetch(`https://peaceful-scrubland-01312.herokuapp.com/deleteAnalysis/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
          })
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

  const onSubmit = (data) =>{ 
      console.log(data)
    fetch("https://peaceful-scrubland-01312.herokuapp.com/analysis", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Analysis Added!", "Review has been added!", "success");
          reset();
        } else {
        }
      });
    };

  return (
      <div className="analysis">
    <div className="from-section text-center">
         <h3 className="fw-bold text-center">UpDate your Analysis</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
      {errors.star && <span>Please type Number between 0-5</span>}
        <input
        autoFocus
          placeholder="Liquidity %"
          type="number"
          {...register("Liquidity", { required: true })}
        />
        <input
          placeholder="Marketing %"
          type="number"
          {...register("Marketing", { required: true })}
        />
        <input
          placeholder="Buy Tax %"
          type="number"
          {...register("Buy_Tax", { required: true })}
        />
         
      
        <input type="submit" />
      </form>
    </div>

     
    {analysiss.map(analysis => <div className="d-flex analysis text-white justify-content-center">
                <div className="div1">
                    <h1>{analysis.Liquidity}%</h1>
                    <p>Liquidity</p>
                   
                </div>
                <div className="div2">
                <h1>{analysis.Marketing}%</h1>
                    <p>Marketing</p>
                   
                </div>
                <div className="div3">
                <h1>{analysis.Buy_Tax}%</h1>
                    <p>Buy Tax</p>
                </div>
                <button
                    onClick={() => deleteOrders(analysis._id)}
                    className="btn btn-danger mt-2 "
                  >
                    Delete Analysis
                  </button>
            </div>
           ) }
    </div>
  );
};

export default Review;
