import React from 'react'

function Card() {
  return (
    <>
      <div className='w-90 h-100 bg-[#ffffff] fixed inset-x-20 my-30 flex flex-col rounded-3xl dark:bg-[#130f0e] dark:text-white  shadow-lg'>
        <div className='flex flex-row gap-44 p-5 justify-center items-center' >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png" alt="matcha" className='p-4 rounded-full w-14 bg-[#ffffff] border-2 border-[rgb(196,196,196)]' ></img>
          <button className='w-[85px] h-9 text-[#a3a3a3] text-[13px] bg-[#ffffff] rounded-[10px] border-2  border-[#e9e9e9]'>Save</button>
        </div>
        <div className='px-8'>
          <p className='text-[16px] text-black font-bold'>Amazon</p>
          <h1 className='text-[25px] text-black font-bold' >Senior UI/UX Designer</h1>
          <div className='inline-flex gap-2 mt-3 '>
          <p className="bg-[#e9e9e9] text-[#040404] text-[13px] rounded-[8px] p-2 font-bold ">Part-time</p>
          <p className="bg-[#e9e9e9] text-[#040404] text-[13px] rounded-[8px] p-2 font-bold">Senior level</p>
          </div>
        </div>

        <div className='flex flex-row gap-18 px-8 mt-26 items-center'>
          <div className="flex flex-col">
             <p className='text-[#040404] text-[20px] font-bold' >$120/hr</p>
             <p className='text-[#040404] text-[14px] ' >San Francisco, CA</p>
          </div>
          <button className= " w-[100px] h-12 bg-[#040404] text-white font-bold font-medium text-[13px] rounded-[12px] p-2 dark:bg-[#fefefe] dark:text-[#130f0e]" >Apply now</button>

        </div>
         
         
      </div>
    </>
  )
}

export default Card