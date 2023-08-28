import React from 'react'
import Button from '../Components/Button'
import ShoeCard from '../Components/ShoeCard'
import { statistics, shoes } from '../Constants/index'
import {bigShoe1} from '../../assets/images'
import { useState } from 'react'

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-monserrat text-coral-red'>Our Summer collection</p>
        <h1 className='text-8xl font-bold max-lg:text-4xl mt-10 font-palanquin   xl:nowrap'>
          <span className='relative z-10 pr-10'>The New Arrival</span>
          <br/>
          <span className='text-coral-red mt-3'> Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg mt-6 mb-14'>Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>

        <Button/>


    <div className='container flex justify-start items-start flex-wrap w-full mt-20 gap-16 max-lg:gap-10'>
    {statistics.map((statistic) => {
        return (
          <div className='flex flex-col justify-center items-center gap-2 max-lg:gap-1' key={statistic.label}>
            <h1 className='text-4xl font-palanquin font-bold max-lg:text-lg'>{statistic.value}</h1>
            <p className='text-lg font-montserrat text-slate-gray '>{statistic.label}</p>
          </div>
        )
      }
    )}
    </div>
     
      </div>



<div className='container relative flex-1 mr-[6rem] flex-col flex justify-center items-center bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt='bigShoe' width={610} height={500} className='object-contain relative z-10 pb-[5rem]' />
        <div className='container flex justify-center items-center gap-5 max-lg:gap-5 m-3 p-3 flex-wrap max-lg:m-1 max-lg:p-1 '>
          {shoes.map((shoe) => {
            return (
              <div key={shoe.bigShoe}>
                <ShoeCard imgURL={shoe} changeBigShoeImg={() => setBigShoeImg(shoe.bigShoe)} bigShoeImg={bigShoeImg} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}



export default Hero