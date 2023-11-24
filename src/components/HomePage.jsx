import React, { useContext, useState } from "react";

import { stateContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

import { URL } from "../constants";
import FileInput from "./FileInput";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const { setGdata, fileData } = useContext(stateContext);

  const handleOnClick = async (e) => {
    e.preventDefault();
    if (!fileData) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileData }),
    };

    console.log(requestOptions.body);
    const response = await axios.post(`${URL}/file_data`, requestOptions);
    if (response) {
      setGdata(response?.data?.output);
      navigate("/fileinfo");
    } else alert("Something went wrong");
  };

  const handleChangeAlert = () => {
    setShowAlert(false);
  };

  const handleGoBack = () => {
    // Go back to the previous page
    navigate(-1);
  };

  return (
    <section className="">
      {showAlert && (
        <div className="my-4 p-4 bg-red-500 text-white rounded w-10/12 flex justify-between items-center mx-auto">
          <span className="text-lg">Please select a file</span>
          <span className=" px-4 py-3" onClick={handleChangeAlert}>
            <svg
              className="fill-current h-6 w-6 text-white-primary"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <div className="flex flex-col p-2 md:p-10 mt-10 w-full  ">
        <div className="flex flex-col justify-center content-center">
          <h1 className="text-8xl">
            Optimal 2-beam orientation for EMCD experiments
          </h1>
          <h2 className="flex flex-col my-10 justify-center content-center text-5xl">
            What are EMCD experiments ?
          </h2>
          <p className="text-3xl text-left text-slate-200">
            EMCD experiments provide a way to study the magnetic properties of
            materials at the atomic and nanoscale, offering insights into the
            magnetic structure, magnetic moments, and other related
            characteristics. These experiments are valuable for understanding
            the behavior of magnetic materials in various applications,
            including those in nanotechnology and materials science.
          </p>
          <h2 className="flex flex-col my-10 justify-center content-center text-5xl">
            What is Optimal 2-beam orienation in this case?
          </h2>
          <p className="text-3xl text-left text-slate-200">
            The term "Optimal 2-beam orientation" in the context of EMCD
            experiments likely refers to finding the best conditions, including
            specimen thickness and diffraction geometry, to maximize the EMCD
            signal. This optimization is crucial for obtaining accurate and
            reliable results.
          </p>
          <h2 className="flex flex-col my-10 justify-center content-center text-5xl">
            What can this website do ?
          </h2>
          <p className="text-3xl text-left text-slate-200">
            In this website, you have to upload a WIEN2K structure file, thi site extracts all the important information from that structure file, and then we give some important manual values such as G vector range and acceleration voltage, the user can then get optimized G vectors and corresponding structure factor and thus can access the EMCD weight factor.
          </p>
        </div>
        <FileInput />
        <div className="mt-5 text-center">
          <button
            href="/"
            className="get-started-button"
            onClick={handleOnClick}
          >
            Get Started
          </button>
          </div>
          <div className="mt-5 text-center">
          <button
          className="back-button"
          onClick={handleGoBack}
        >
          Go Back
        </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
