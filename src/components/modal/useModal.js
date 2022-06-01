import {useState} from 'react'

export const useModal=(initialValue=false)=> {
  const [isOpen, seIsOpen]=useState(initialValue);
  
  const openModal=()=>seIsOpen(true);
  const closeModal=()=>seIsOpen(false);
  
    return [isOpen,openModal,closeModal];
}

