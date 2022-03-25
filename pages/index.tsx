import type { GetStaticPropsResult, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAppDispatch,useAppSelector } from '../store/hooks'
import { cartSelector, setData } from '../store/cart.slice'
import React from 'react'
import Home  from '../components/Home'
import { AnimatePresence } from 'framer-motion'


interface Props {

  video?:any[],

}

const Casa: NextPage<Props> = ({video}) => {
const {data} =useAppSelector(cartSelector)

  const dispatch = useAppDispatch()

  React.useEffect(()=>{
dispatch(setData(video))

  },[])
  return (
    <>
    <Home  />
  
  </>
  )
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>>  {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

 

  const url =
  "https://www.dariovettura.com/postfolio/wp-json/wp/v2/posts?_embed&per_page=100";

  //const result = await Axios.get(url);
  //const menu =  result.data

  const res = await fetch(url);
 
  const video = await res.json();

  //  const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      video,
  
    },
    revalidate: 1,
  };
}
export default Casa
