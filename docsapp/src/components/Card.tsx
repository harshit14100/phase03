import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "motion/react"
import { RefObject } from "react";
// import { ref } from 'process'; 

type Tag = {
  isOpen: boolean;
  tagtitle: string;
  tagcolor: string;
};

type CardProps = {
  data: {
    desc: string;
    size: string;
    close: boolean;
    tag: Tag;
  };
  containerRef: RefObject<HTMLDivElement>;
};

function card({data, reference }:CardProps) {
  return (
    <>
    <motion.div drag dragConstraints={reference} dragElastic={0.2}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
       className=' relative text-white h-72 w-60 rounded-[30px] bg-zinc-900/90 py-10 px-8 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='text-sm mt-5 leading-tight'>{data.desc}</p>

      <div className='footer w-full h-15  absolute bottom-0 left-0 top-53'>
        <div className=' px-8 flex justify-between mt-0 items-center mb-3'>
          <h4>{data.size}</h4>
          <span className='flex justify-center items-center h-6 w-6 text-4xl bg-zinc-300  rounded-full text-[#000]'>
            {data.close ? <IoCloseCircleOutline /> : <MdDownloading />}
          </span>
        </div>
        {
          data.tag.isOpen && (<div className=' flex justify-center items-center tag  px-8 h-10 w-full mt-0 py-3' style={{backgroundColor:data.tag.tagcolor}}>
        <h3 className='font-semibold'>{data.tag.tagtitle}</h3> 
        </div>)  
        }
        
      </div>
    </motion.div>
    </>
  )
}

export default card
