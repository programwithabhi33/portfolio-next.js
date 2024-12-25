"use client"
import { changeTitle } from "@/slices/navbar/navTitleSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const ChangeNavTitleBySlug = ({ navTitle }) => {
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(changeTitle(navTitle)); 
  },[])
}

export default ChangeNavTitleBySlug
