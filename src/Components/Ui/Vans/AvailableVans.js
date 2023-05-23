import React from "react";
import "./AvailableVans.css";
import {Link} from 'react-router-dom'

function AvailableVans({filteredData, toStrParams}) {
  console.log(toStrParams);
  return (
    <div className="avail-vans-div">
      {filteredData.map((data) => {
        return (
          <Link to={`${data.id}`} state={{vanpage : 'helloState'}} key={data.id}>
          <div className="single-avail-van" key={data.id}>
            <img className="avaul-van-img" src={data.img} alt="van" />
            <div className="availvan-details-div">
              <p className="avail-van-title">{data.name}</p>
              <p className="avail-van-price">${data.price}/day</p>
            </div>
            <button className="avail-van-btn">{data.type}</button>
          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AvailableVans;
