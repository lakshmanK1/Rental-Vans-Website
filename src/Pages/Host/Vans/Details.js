import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AllVans } from "../../../Components/Ui/Vans/AllVans";
import useVanData from "./useVanData";
import './NavLinkTabs.css'

function Details() {
    
    const {vandetails} = useVanData();

//   const [vandetails, setVanDetails] = useState(null);

//   const params = useParams();

//   useEffect(() => {
//     const vanDetails = AllVans.fiknd((data) => data.id === parseInt(params.id));
//     setVanDetails(vanDetails);
//   }, [params.id]);

  return (
    <div>
      {vandetails ? (
        <>
          <h1 className="details-title"><b>Title : </b>{vandetails.name}</h1>
          <p className="details-category"><b>Category : </b>{vandetails.button}</p>
          <p className="details-description"><b>Description : </b>{vandetails.description}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Details;
