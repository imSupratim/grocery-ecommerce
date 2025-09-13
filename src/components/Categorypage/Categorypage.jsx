import React from "react";
import Banner from "../Banner/Banner";
import ProductList from '../ProductList/ProductList'
import Cards from "../Cards/Cards";

const Categorypage = () => {

    const renderProduct = ProductList.map(product=>{
        return(
            <Cards image={product.image} title={product.name} price={product.price}/>
        )
    })
  return (
    <div>
      <Banner />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-9 py-20 mx-auto max-w-[1400px] px-10 ">
        {renderProduct}
      </div>
    </div>
  );
};

export default Categorypage;
