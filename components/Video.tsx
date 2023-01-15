import * as React from "react";

import { InView, useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

interface VideoProps {
  src?: string,
  muted?: boolean

}

const Video: React.FC<VideoProps> = ({ src, muted }) => {
  const videoRef = React.useRef<any>(null);
  // const [inView, setInView] = React.useState(false);



  const [ref, inView] = useInView({
    threshold: 1,
  })

  //   React.useEffect(()=>{

  //     if(inView)
  //     {setPlay(true);
  //     console.log("acceso")}
  //     else{setPlay(false);
  //     console.log("spento")}
  // },[inView])

  //   console.log(inView)
  return (



    <div ref={ref} className="video">

      <ReactPlayer
        config={{ youtube: { playerVars: { disablekb: 1 } } }}

        volume={0.5}
        muted
        className="video_player"
        url={src}
        playsinline
        playing={inView}
        loop
      />
    </div>
    //    <video

    //    ref={ref}
    //    className="video_player"
    //    src={src}
    //    playsInline

    //    loop
    //  ></video>





  );
}

export default Video;