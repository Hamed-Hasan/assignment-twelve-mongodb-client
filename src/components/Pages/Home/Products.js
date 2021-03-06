import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import Product from "../Home/Product";
const Products = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://agile-castle-61471.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  return (
    <div id="service" className="container mx-auto my-10">
      <div className="section-content mb-16">
        <h2 className="text-center" data-aos="zoom-in-up">
          <p className="text-sm md:text-6xl font-bold pb-2 ">Most Important </p>
          <p className="text-sm md:text-4xl">
            {" "}
            Things We Offer Aren't Manufactured
          </p>
        </h2>
      </div>

      <div className="pt-11">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {services.map((service) => (
              <Product key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
