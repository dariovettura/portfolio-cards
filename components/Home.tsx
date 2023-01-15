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
  video?: any[],
  item?: any,

}

const Card: React.FC<Props> = ({ id, title, category, theme, isSelected, item }) => {


  return (
    <li className={`card`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${item?.id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${item?.id}`}
          >
            <img className="card-image" src={item?.acf?.anteprima} alt="" />
            <div className="img-overlay"></div>
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${item?.id}`}
          >
            <span className="category">
              {item?._embedded["wp:term"][0][0].name}
            </span>

            <h2 className="title">{item?.title.rendered}</h2>

          </motion.div>
        </motion.div>
      </div>
      <Link href={`/${item?.id}`} scroll={false} >
        <a className={`card-open-link`} ></a>
      </Link>


    </li>
  );
}

const Home: React.FC<Props> = ({ video }) => {
  const { data } = useAppSelector(cartSelector)
  console.log(data)

  React.useEffect(() => {
    const contenuto = document.querySelector("body");
    contenuto?.classList.remove("overflow-hidden");
  }, [])
  return (

    <ul className="card-list">
      {data.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </ul>

  );
}

export default Home;