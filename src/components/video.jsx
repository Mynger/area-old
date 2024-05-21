import { useRef } from "react";

export default function Video ({src}) {

    const videoRef = useRef(null);

    const handleVideoClick = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };
    
    const style = {
        borderRadius: '40px',
    };

    return (
        <video src={src} type="video/mp4" autoPlay muted ref={videoRef} onClick={handleVideoClick} style={style}></video>
    )
}