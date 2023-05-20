import React, { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { AllVans } from "../../../Components/Ui/Vans/AllVans";
import {BiArrowBack} from 'react-icons/bi'
import './SpecificVan.css'

const isActiveStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

function SpecificVan() {
  const [speificvan, setSpecificVan] = useState(null);
  const params = useParams();


  useEffect(() => {
    const vanDetails = AllVans.find((data) => data.id === parseInt(params.id));
    setSpecificVan(vanDetails);
  }, [params.id]);

  return (
    <main className="spec-van-main">
      {speificvan ? (
        <>
          <div className="spec-van-backdiv">
            <NavLink to='..' relative="path">
            <p className="spec-van-backtext"><BiArrowBack/>Back to vans</p>
            </NavLink>
          </div>
          <div className="spec-van-details-div">
            <div className="specvan-innerdiv">
            <div className="spec-van-imgdiv">
              <img
                className="spec-van-img"
                src={speificvan.img}
                alt={speificvan.name}
              />
            </div>

            <div className="spec-van-detailsdiv">
              <span className="spec-van-span">{speificvan.button}</span>
              <h1>{speificvan.name}</h1>
              <p>${speificvan.price}/day</p>
            </div>
            </div>

            <div className='spec-van-navlinkdiv'>
            <NavLink end to='.' style={({isActive})=>isActive ? isActiveStyle : null}>Details</NavLink>
            <NavLink to='pricing' style={({isActive})=>isActive ? isActiveStyle : null}>Pricing</NavLink>
            <NavLink to='photos' style={({isActive})=>isActive ? isActiveStyle : null}>Photos</NavLink>
          </div>
          <div>
          <Outlet/>
          </div>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
}

export default SpecificVan;
