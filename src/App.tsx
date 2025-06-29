import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const downloadVideo = (url: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `Never_gonna_give_you_up-OIIA_OIIA_${Date.now()}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    const videoUrl = "/static/video.mp4";
    downloadVideo(videoUrl);
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-player"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/static/video.mp4" type="video/mp4" />
        Your browser does not support the video tag LOL
      </video>

      <button className="mute-toggle" onClick={toggleMute}>
        <FontAwesomeIcon
          icon={isMuted ? faVolumeXmark : faVolumeHigh}
          size={"2x"}
          color={"#000"}
        />
      </button>
    </div>
  );
}

export default App;
