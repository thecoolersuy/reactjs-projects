import React from 'react'

function Card({
  imageUrl,
  companyName,
  role,
  infoCard1,
  infoCard2,
  payment,
  location


}) {
  return (
    <>
      <div className='w-90 h-100 bg-[#ffffff] dark:bg-[#130f0e] flex flex-col rounded-3xl  shadow-lg'>
        <div className='flex flex-row gap-44 p-5 justify-center items-center' >
          <img src={imageUrl} alt="matcha" className='p-4 rounded-full w-14 bg-[#ffffff] border-2 border-[rgb(196,196,196)] dark:border-[#333333]' ></img>
          <button className='w-[85px] h-9 text-[#a3a3a3] dark:text-[#777777] text-[13px] bg-[#ffffff] dark:bg-[#1e1e1e] rounded-[10px] border-2  border-[#e9e9e9] dark:border-[#333333]'>Save</button>
        </div>
        <div className='px-8'>
          <p className='text-[16px] text-black dark:text-white font-bold'>{companyName}</p>
          <h1 className='text-[25px] text-black dark:text-white font-bold' >{role}</h1>
          <div className='inline-flex gap-2 mt-3 '>
          <p className="bg-[#e9e9e9] dark:bg-[#2a2a2a] text-[#040404] dark:text-[#e0e0e0] text-[13px] rounded-[8px] p-2 font-bold ">{infoCard1}</p>
          <p className="bg-[#e9e9e9]  dark:bg-[#2a2a2a] text-[#040404] dark:text-[#e0e0e0] text-[13px] rounded-[8px] p-2 font-bold">{infoCard2}</p>
          </div>
        </div>

        <div className='flex flex-row gap-18 px-8 mt-26 items-center'>
          <div className="flex flex-col">
             <p className='text-[#040404] dark:text-white text-[20px] font-bold' >${payment}/hr</p>
             <p className='text-[#040404] dark:text-[#aaaaaa] text-[14px] ' >{location}</p>
          </div>
          <button className= " w-[100px] h-12 bg-[#040404] dark:bg-[#fefefe] text-white dark:text-[#130f0e] font-bold font-medium text-[13px] rounded-[12px] p-2 dark:bg-[#fefefe] dark:text-[#130f0e]" >Apply now</button>

        </div>
         
         
      </div>
      
    </>
  )
}

export default Card