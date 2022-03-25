import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useRouter } from 'next/router';
import { useSwipeable } from 'react-swipeable';
import { InView, useInView } from "react-intersection-observer";

import Link from 'next/link'
import { items } from "./Data";
import { useScrollConstraints } from "../utils/use-scroll-constraints";
import { useWheelScroll } from "../utils/use-wheel-scroll";
import { useAppSelector } from "../store/hooks";
import { cartSelector } from "../store/cart.slice";
import Video from "./Video";

interface Props {
  id?: any,
  isSelected?: boolean,
  history?: {
    push: (route: string) => void;
  };
}


export const CardSelected: React.FC<Props> = ({ id, isSelected = true, history }) => {
  const {data} =useAppSelector(cartSelector)
  // const [item,setItem] = React.useState(data.find(item => item.id === parseInt(id)))
  const item = data.find(item => item.id === parseInt(id));
  const [bottom, inViewBottom] = useInView({
    threshold: 1,
  })
  const [top, inViewTop] = useInView({
    threshold: 1,
  })
  console.log(item,data,id)

  const router = useRouter();

  function swipeUpTodismiss() {
    if(inViewBottom ){
      console.log("inview")
    router.push({ pathname: "/" }, undefined, { scroll: false })}
  }
  function swipeBottomTodismiss() {
    if(inViewTop ){
      console.log("inview")
    router.push({ pathname: "/" }, undefined, { scroll: false })}
  }
 
  const handlers = useSwipeable({
    onSwipedUp: () => swipeUpTodismiss(),
    onSwipedDown:() => swipeBottomTodismiss(),
   
    // preventDefaultTouchmoveEvent: true,
    // trackMouse: true
  });

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
       
      </motion.div> */}
      <div style={{ height: "100vh", width: "100vw", position: "fixed", backgroundColor: "rgb(0,0,0,.7)", top: 0, zIndex: 10 }}>
        <div style={{ height: "100vh", width: "100vw", position: "fixed", backgroundColor: "rgb(0,0,0,.7)", top: 0, zIndex: 11 }} ></div>

        <div  {...handlers} className="card-content-container open">
          <div ref={top}></div>
          <motion.div
            // drag="x"
            // dragConstraints={{ left: 1, right: 1 }}
            // onDragEnd={
            //   () => checkSwipeToDismiss()
            // }
            className="card-content" layoutId={`card-container-${id}`}>
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
                 <Video  src={item?.acf.link}></Video>
              {/* <img className="card-image" src={`images/${id}.jpg`} alt="" /> */}
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <span className="category"></span>
              <h2></h2>
            </motion.div>

            <motion.div className="content-container" animate>
              <p style={{ fontSize: "100px" }}>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias odit eum beatae eius laboriosam, numquam repellat aspernatur nisi omnis provident inventore nobis unde
                quibusdam dolorem aliquid</p>
              cupiditate
              fugiat in. Eaque?
              <Link href="/" scroll={false} >
                <a >back</a>
              </Link>
            </motion.div>
          </motion.div>
          <div ref={bottom}></div>
        </div>
      </div>

    </>
  );
}
