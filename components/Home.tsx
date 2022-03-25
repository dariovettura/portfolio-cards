import React from "react";
import { items } from "./Data";
import Link from 'next/link'
import { motion } from "framer-motion";
import { GetStaticPropsResult } from "next";
import Video from "./Video";
import { useAppSelector } from "../store/hooks";
import { cartSelector } from "../store/cart.slice";


interface Props {
    id?: any,
    title?: any,
    category?: any,
    theme?: any,
    isSelected?: boolean,
    selectedId?: any
    video?:any[],
    item?:any,

}



const Card: React.FC<Props> = ({ id, title, category, theme, isSelected ,item}) => {

    
    return (
        <li className={`card ${theme}`}>

            <div className="card-content-container">
                <motion.div className="card-content" layoutId={`card-container-${item?.id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${item?.id}`}
                    >
                          <Video  src={item?.acf.link}></Video>
                        {/* <img className="card-image" src={`images/${id}.jpg`} alt="" /> */}
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${item?.id}`}
                    >
                        <span className="category"></span>
                        <h2>{title}</h2>
                        <Link href={`/${item?.id}`} scroll={false} >
                            <a >apri</a>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>



        </li>
    );
}

 const Home: React.FC<Props> = ({video}) => {
    const {data} =useAppSelector(cartSelector)
  console.log(data)

    React.useEffect(()=>{
        const contenuto = document.querySelector("body");
        contenuto?.classList.remove("overflow-hidden");
      },[])
    return (
        <div id="card-list-container">
          {/* {    data?.map((row,i) => (
        <Video  key={i} src={row.acf.link}></Video>))} */}
        <ul className="card-list">
            {data.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </ul>
        </div>
    );
}

  export default Home;