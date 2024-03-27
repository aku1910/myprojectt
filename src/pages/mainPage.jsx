import React from 'react'
import '../Products.css'
import "../Sidebar.css"
import Section4 from '../Section4'
import Slider from "../Slider";
import { SliderData } from '../SliderData'
import ImageSlider from '../ImageSlider'
import { Card } from 'reactstrap'
import Product from "../Product"

const Main = () => {
  return (
    <>
    <ImageSlider slides={SliderData} />
    <Card />
    <Product />
    <Section4/>
    <h5 style={{ color: 'gray' }}>Popular Items</h5>
    <Slider />
    </>

  )
}

export default Main