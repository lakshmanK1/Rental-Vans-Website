import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { AllVans } from "../../../Components/Ui/Vans/AllVans";

const useVanData = () => {
    const [vandetails, setVanDetails] = useState(null);

  const params = useParams();

  useEffect(() => {
    const vanDetails = AllVans.find((data) => data.id === parseInt(params.id));
    setVanDetails(vanDetails);
  }, [params.id]);

  return {vandetails};
}

export default useVanData;