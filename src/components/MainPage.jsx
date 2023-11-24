import React, { useContext, useState } from "react";


import { stateContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

import { URL } from "../constants";
import FileInput from "./FileInput";
import axios from "axios";

const MainPage = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const { setGdata, fileData } = useContext(stateContext);

  

  const handleOnClick = () => {
    // Redirect to HomePage2
    navigate('/HomePage');
  };

  return (
    <section className="">
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
          {/* <p className="text-xl text-left my-5 text-slate-200">
            In this website you can finds an optimized thickness and diffraction
            geometry in order to obtain the maximum attainable energy-loss
            magnetic chiral dichroism (EMCD) signal for a given crystal
            structure using Transmission Electron Microscopy.
          </p>
          <p className="text-xl text-left my-5 text-slate-200 ">
            Don't have file ?{" "}
            <a href="https://github.com/A158-debug/G_Optimization_Scientific_Model">
              {" "}
              Download from Github
            </a>
          </p> */}
        </div>
        {/* <FileInput /> */}
        <div className="mt-5 text-center">
          <button
            href="/"
            className="get-started-button"
            onClick={handleOnClick}
          >
            Start
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainPage;