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
  const [about , setAbout] = useState([])  // about page for data
  const [amount,setAmount] = useState(0);

  useEffect(() => {
    allFoodGet()
  }, [])

  const uriApi = 'https://stratappresturant.herokuapp.com/api/v1/org/1/getHomeDetail/';
  const allFoodGet = async () => { // mahsulotlarni get so'rovi bilan chaqirib olyapman
    const response = await axios.get(`${uriApi}`);
    const data = response.data;
    setData(data);
  };

 const Amount = ()=>{
   setAmount(amount + 1)
 }
 const removeAmount = ()=>{
   setAmount(amount - 1)
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
    }
  };

  // about page for function

  const onIndex = (e, key,index) =>{
    onSee(e);
    setAbout(key.product[index])
    // console.log(key.product[index]);
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
                      <Card item={item}  onIndex={(e)=> onIndex(e, key,index2)} />
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
        about={about} 
        Amount={Amount}
        removeAmount={removeAmount}
        amount={amount}
        />
      </main>
    </>
  )
}

export default Index