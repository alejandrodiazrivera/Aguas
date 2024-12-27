import React, { useRef, useEffect } from 'react'
import './VideoPlayer.css'
import video from '../../assets/teaser.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setPlayState(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setPlayState]);

    return (
        <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer