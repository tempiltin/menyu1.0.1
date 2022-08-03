import React, { useEffect, useState } from 'react'
import Card from '../Components/Card/Card'
import ResAbout from '../Components/RestoranAbout/ResAbout'
import './swiper.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ProdView from '../Components/ProdView/ProdView';
import axios from 'axios';

const Index = () => {


  const [data, setData] = useState([]); // For Data base
  const [state, setState] = useState(false); // about page scale()
  const [product, setProduct] = useState([])  // about page for data
  const [quantity, setQuantity] = useState(0);
  const [item_id, setItemId] = useState(0)
// console.log(product);
// console.log(product);



  // const sendCart = {
  //   order_id: null,
  //   table_num: 2,
  //   people_number: 3,
  //   status: 1,
  //   paymant: 1,
  //   product: [
  //     {
  //       product_id: about.product_id,
  //       product_amount_id: 2,
  //       amount: 1
  //     },
  //   ]
  // }
  
  
  //https://github.com/tempiltin/menyu1.0.1.git

  const newproduct = [
    {
      product_id: product.product_id,
      amount_id: item_id,
      amount: quantity,
    }

  ]
  // console.log(newproduct);


  useEffect(() => {
    allFoodGet()
  }, [])

  const uriApi = 'https://stratappresturant.herokuapp.com/api/v1/org/1/getHomeDetail/';
  const allFoodGet = async () => { // mahsulotlarni get so'rovi bilan chaqirib olyapman
    const response = await axios.get(`${uriApi}`);
    const data = response.data;
    setData(data);
  };

  const addItem = (index) => {
    // console.log(product.amount[index].amount_id)
   
   
    setItemId(product.amount[index].amount_id)
    // const am_id = product.amount[index].amount_id
    setQuantity(quantity + 1);
  }

  const removeAmount = () => {
    setQuantity(quantity - 1)
  }

  const onSee = (e) => {
    e.preventDefault();
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const removeButton = (e) => {
    e.preventDefault();
    if (state) {
      setState(false);
    } else {
      setState(true);
      // setProduct(key.product[index])
      //  setItemId()
    }
  }


  const onIndex = (e, key, index) => {
    onSee(e);
    setProduct(key.product[index])
    setItemId()
  }


  return (
    <>
      <main className='home_page'>
        <ResAbout stolNum={12} resName={data.organizatsion} />

        {data.category
          ? data.category.map(
            (key, index) => (
              <div className="container" key={index}>
                <h2 className='category_name'>{key.name}</h2>
                <Swiper key={index} slidesPerView={1.5} spaceBetween={30} pagination={{ clickable: true }} className="mySwiper">


                  {key.product.map((item, index2) => (
                    <SwiperSlide key={index2}>
                      <Card item={item} onIndex={(e) => onIndex(e, key, index2)} />
                    </SwiperSlide>
                  ))}


                </Swiper>
              </div>
            )
          )
          : ""
        }

        <ProdView
          state={state}
          removeButton={removeButton}
          about={product}
          Amount={(index) => addItem(index)}
          removeAmount={removeAmount}
          amount={quantity}
          newproduct={newproduct}
        />
      </main>
    </>
  )
};

export default Index;