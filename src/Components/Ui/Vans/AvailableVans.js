import React from "react";
import "./AvailableVans.css";
import { AllVans } from "./AllVans";
import {Link} from 'react-router-dom'

function AvailableVans() {
  return (
    <div className="avail-vans-div">
      {AllVans.map((data) => {
        return (
          <Link to={`/vans/${data.id}`} key={data.id}>
          <div className="single-avail-van" key={data.id}>
            <img className="avaul-van-img" src={data.img} alt="van" />
            <div className="availvan-details-div">
              <p className="avail-van-title">{data.name}</p>
              <p className="avail-van-price">${data.price}/day</p>
            </div>
            <button className="avail-van-btn">{data.button}</button>
          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AvailableVans;
