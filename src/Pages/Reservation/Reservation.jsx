import { useState, useEffect } from "react";
import { api } from "../../Service/axios";
import { useParams } from "react-router-dom";
import HeaderDesc from "../Description/HeaderDesc";
import ReservPage from "./Reservation";
import DescriptionFooter from "../Description/DescriptionFooter";

export default function Reservation() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getByIdproducts();
  },[]);

  async function getByIdproducts() {
    const response = await api.get(`/v1/products/${id}`);
    setProducts([response.data]);
  }


  return (
    <div>
      <div className="Header_desc">
        <HeaderDesc products={products} />
      </div>
      <div className="Header_desc">
        <ReservPage products={products} />
      </div>
      <div className="Car_categories">
        <DescriptionFooter />
      </div>
    </div>
  );
}
