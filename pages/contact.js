'use client';

import React ,{useEffect,useState}from "react";
import ContainerBlock from "../components/ContainerBlock";
import Contact from "../components/Contact";

export default function contact() {

    const [isClient, setIsClient] = useState(false)
   
    useEffect(() => {
      setIsClient(true)
    }, [])
  
  return (
    <ContainerBlock>
      { isClient?<Contact />:'prerenderd'}
    </ContainerBlock>
  );
}
