import React from 'react'
import Card from '../Components/Card/Card'
import ResAbout from '../Components/RestoranAbout/ResAbout'
import './swiper.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ProdView from '../Components/ProdView/ProdView';

const Index = () => {


  const onview = () => {
    alert('salom')
  }

  return (
    <>
      <main className='home_page'>
        <ResAbout stolNum={12} resName={'Programmer'} />

        <div className="container">
          <h2 className='category_name'>Yengil taomlar</h2>
          <Swiper slidesPerView={1.5} spaceBetween={30} pagination={{ clickable: true }} className="mySwiper">
            <SwiperSlide>
              <Card title={'Checken Burger'} onview={onview} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={'Big Burger'} onview={onview} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={'Mini Burger'} onview={onview} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={'Checken Burger'} onview={onview} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={'Big Burger'} onview={onview} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={'Mini Burger'} onview={onview} />
            </SwiperSlide>


          </Swiper>
        </div>

        <div className="container">
          <h2 className='category_name'>Yengil taomlar</h2>
          <Swiper slidesPerView={1.5} spaceBetween={30} pagination={{ clickable: true }} className="mySwiper">
            <SwiperSlide>
              <Card title={'Checken Burger'} onview={onview} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={'Big Burger'} onview={onview} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title={'Mini Burger'} onview={onview} />
            </SwiperSlide>


          </Swiper>
        </div>
       
        <ProdView />
      </main>
    </>
  )
}

export default Index