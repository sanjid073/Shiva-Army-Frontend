import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./FaqQustionAndAnswer.css";

const FaqQustionAndAnswer = () => {
  const [accordions, setAccordions] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const [isUpdate, setIsUpdated] = useState(null);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/accordion")
      .then((res) => res.json())
      .then((data) => setAccordions(data));
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
        fetch(`https://peaceful-scrubland-01312.herokuapp.com/deleteAccordion/${id}`, {
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

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://peaceful-scrubland-01312.herokuapp.com/accordion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("accordion Added!", "Review has been added!", "success");
          reset();
        } else {
        }
      });
  };

  return (
    <div className="analysis">
      <div className="from-section-2 text-center">
        <h3 className="fw-bold text-center">UpDate your FAQ</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.faq_qus_1 && <span>Required all field</span>}
          <input
            placeholder="Faq Question 1"
            {...register("faq_qus_1", { required: true })}
          />
          <textarea
            name="Faq_ans_1"
            id=""
            placeholder="Faq Answer 1"
            cols="60"
            rows="8"
            {...register("Faq_ans_1", { required: true })}
          ></textarea>
          <input
            placeholder="Faq Question 2"
            {...register("faq_qus_2", { required: true })}
          />
          <textarea
            name="Faq_ans_2"
            id=""
            placeholder="Faq Answer 2"
            cols="60"
            rows="8"
            {...register("Faq_ans_2", { required: true })}
          ></textarea>
          <input
            placeholder="Faq Questio 3"
            {...register("faq_qus_3", { required: true })}
          />
          <textarea
            name="Faq_ans_3"
            id=""
            placeholder="Faq Answer 3"
            cols="60"
            rows="8"
            {...register("Faq_ans_3", { required: true })}
          ></textarea>
          <input
            placeholder="Faq Questio 4"
            {...register("faq_qus_4", { required: true })}
          />
          <textarea
            name="Faq_ans_4"
            id=""
            placeholder="Faq Answer 4"
            cols="60"
            rows="8"
            {...register("Faq_ans_4", { required: true })}
          ></textarea>
          <input
            placeholder="Faq Questio 5"
            {...register("faq_qus_5", { required: true })}
          />
          <textarea
            name="Faq_ans_5"
            id=""
            placeholder="Faq Answer 5"
            cols="60"
            rows="8"
            {...register("Faq_ans_5", { required: true })}
          ></textarea>
          <input
            placeholder="Faq Questio 6"
            {...register("faq_qus_6", { required: true })}
          />
          <textarea
            name="Faq_ans_6"
            id=""
            placeholder="Faq Answer 6"
            cols="60"
            rows="8"
            {...register("Faq_ans_6", { required: true })}
          ></textarea>

          <input type="submit" />
        </form>
      </div>

      {accordions.map((accordion) => (
        <div className="row flex-nowrap">
          <div className="col-lg-6">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item  bg-transparent">
                <h2 class="accordion-header " id="flush-headingOne">
                  <button
                    class="accordion-button  bg-transparent collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {accordion.faq_qus_1}
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">{accordion.Faq_ans_1}</div>
                </div>
              </div>
              <div class="accordion-item   bg-transparent">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button   bg-transparent collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    {accordion.faq_qus_2}
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">{accordion.Faq_ans_2}</div>
                </div>
              </div>
              <div class="accordion-item   bg-transparent">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button   bg-transparent collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    {accordion.faq_qus_3}
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">{accordion.Faq_ans_3}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item  bg-transparent">
                <h2 class="accordion-header " id="flush-headingFour">
                  <button
                    class="accordion-button  bg-transparent collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    {accordion.faq_qus_4}
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">{accordion.Faq_ans_4}</div>
                </div>
              </div>
              <div class="accordion-item   bg-transparent">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button
                    class="accordion-button   bg-transparent collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    {accordion.faq_qus_5}
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">{accordion.Faq_ans_5}</div>
                </div>
              </div>
              <div class="accordion-item   bg-transparent">
                <h2 class="accordion-header" id="flush-headingSix">
                  <button
                    class="accordion-button   bg-transparent collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    {accordion.faq_qus_6}
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">{accordion.Faq_ans_6}</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => deleteOrders(accordion._id)}
              className="btn btn-lg btn-danger mt-2 "
            >
              Delete Accordion
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqQustionAndAnswer;
