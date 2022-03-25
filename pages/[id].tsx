
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import { CardSelected } from '../components/CardSelected'
import  Home  from '../components/Home'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  React.useEffect(()=>{
    const contenuto = document.querySelector("body");
    contenuto?.setAttribute("class", "overflow-hidden");
  },[])

  return  <>
  <Home />
  <AnimatePresence>
  {id && <CardSelected id={id} key="CardSelected" />}
</AnimatePresence>
</>
}

export default Post