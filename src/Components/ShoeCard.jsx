// import React from 'react'

// const ShoeCard = ({imgURL, changeBigShoeImg, bigShoeImg}) => {

// const handleClick = () => {
// if(bigShoeImg !== imgURL.bigShoe){
//   changeBigShoeImg(imgURL.bigShoe)
// }
// }

//   return (
//     <div className= {`border-2  rounded-xl ${bigShoeImg===imgURL? 'border-coral-red' : 'border-transparent'} cursor-pointer`}
//     onClick={handleClick}>
//       <div className='flex bg-card bg-center bg-cover justify-center items-center max-lg:w-50 max-lg:h-50 max-lg:p-1 rounded-xl'>
//         <img src={imgURL.thumbnail} alt='shoe' width={100} height={120} className='object-contain relative'/>
//       </div>
//     </div>
//   )
// }

// export default ShoeCard


import React from 'react';

const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer`}
      onClick={handleClick}
    >
      <div className='flex bg-card bg-center bg-cover justify-center items-center max-lg:w-50 max-lg:h-50 max-lg:p-1 rounded-xl'>
        <img src={imgURL.thumbnail} alt='shoe' width={100} height={120} className='object-contain relative' />
      </div>
    </div>
  );
};

export default ShoeCard;
