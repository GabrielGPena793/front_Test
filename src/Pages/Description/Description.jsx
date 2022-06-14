import { useState, useEffect } from "react";
import { api } from "../../Service/axios";
import { useParams } from "react-router-dom";
import HeaderDesc from "./HeaderDesc";
import ImgGaleria from "./ImgGaleria";
import CarLocation from "./CarLocation";
import DescriptionFooter from "./DescriptionFooter";
import DateFree from "./DateFree";


export default function Description() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [numberOfMonths, setNumberOfMonths] = useState(2);
  const [products, setProducts] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    if (windowWidth < 580) {
      setNumberOfMonths(1);
    }
    else {
      setNumberOfMonths(2);
    }
  }, [windowWidth]);

  useEffect(() => {
    getByIdProducts();
  }, [])

  async function getByIdProducts() {
    const response = await api.get(`/v1/products/${id}`)
    setProducts([response.data]);
  }

  return (
    <div>
      <div className="Header_desc">
        <HeaderDesc products={products} />
      </div>
      <div className="Img_galeria">
        <ImgGaleria products={products} windowWidth={windowWidth} />
      </div>

      <div className="date_free">
        <DateFree products={products} numberOfMonths={numberOfMonths} />
      </div>

      <div className="Car_location">
        <CarLocation products={products} />
      </div>
      <div className="Car_categories">
        <DescriptionFooter />
      </div>
    </div>
  );
}
