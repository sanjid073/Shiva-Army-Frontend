import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../../Admin/Login/Login";
import "./Faq.css";

const Faq = () => {
  const [accordions, setAccordions] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/accordion")
      .then((res) => res.json())
      .then((data) => setAccordions(data));
  }, []);
  return (
    <div className="faq">
      <div className="container">
        <h1 className="page-heading">FAQ</h1>
        <div className="navigate-link">
          <NavLink to="/">Home {">"} </NavLink>
          <NavLink to="/FAQ"> FAQ</NavLink>
        </div>
        <div className="row">
          {accordions.map((accordion) => (
            <>
              {" "}
              <div className="col-lg-6">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
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
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
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
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
