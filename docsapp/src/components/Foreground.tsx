import React, { useRef } from 'react'
import Card from './Card'



export interface Tag {
  isOpen: boolean;
  tagtitle: string;
  tagcolor: string;
}

export interface CardData {
  desc: string;
  size: string;
  close: boolean;
  tag: Tag;
}

function Foreground() {

  const ref = useRef<HTMLDivElement>(null);

  const data: CardData[] = [
    {desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur sint autem, ut by harshit arora.", 
      size : "3.8 MB",
       close: false,
       tag: {
        isOpen:true,
        tagtitle: "Download Now",
        tagcolor  : "green"
      }} ,
      {desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur sint autem, ut by harshit arora.", 
      size : "3.8 MB",
       close: false,
       tag: {
        isOpen:true,
        tagtitle: "Download Now",
        tagcolor  : "green"
      }} ,
      {desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur sint autem, ut by harshit arora.", 
      size : "3.8 MB",
       close: false,
       tag: {
        isOpen:true,
        tagtitle: "Download Now",
        tagcolor  : "green"
      }} ,
      {desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur sint autem, ut by harshit arora.", 
      size : "3.8 MB",
       close: false,
       tag: {
        isOpen:true,
        tagtitle: "Review",
        tagcolor  : "blue"
      }} ,
      {desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur sint autem, ut by harshit arora.", 
      size : "3.8 MB",
       close: false,
       tag: {
        isOpen:true,
        tagtitle: "Review",
        tagcolor  : "blue"
      }} ,
      {desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur sint autem, ut by harshit arora.", 
      size : "3.8 MB",
       close: false,
       tag: {
        isOpen:true,
        tagtitle: "Review",
        tagcolor  : "blue"
      }} ,
      {desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur sint autem, ut by harshit arora.", 
      size : "3.8 MB",
       close: false,
       tag: {
        isOpen:true,
        tagtitle: "Review",
        tagcolor  : "blue"
      }} ,
      {desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur sint autem, ut by harshit arora.", 
      size : "3.8 MB",
       close: false,
       tag: {
        isOpen:true,
        tagtitle: "Review",
        tagcolor  : "blue"
      }} ,
      {desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur sint autem, ut by harshit arora.", 
      size : "3.8 MB",
       close: false,
       tag: {
        isOpen:true,
        tagtitle: "Review",
        tagcolor  : "blue"
      }} 
    ]
    

    
  return (
    
    <>
      <div ref = {ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-5 flex-wrap '>
      {data.map((item,index)=>(
        <Card key={index} data={item} reference ={ref}/>
      ))}
      </div>
    </>
  )
}

export default Foreground
