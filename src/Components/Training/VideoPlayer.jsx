import { useEffect, useRef } from "react";

export default function VideoPlayer({ src }) {
    const videoRef = useRef(null);

    useEffect(() => {
        // Автоматическое воспроизведение видео при загрузке страницы
        videoRef.current.play();
    }, []);

    return (
        <video ref={videoRef} controls={false} autoPlay muted loop>
            <source src={src} type="video/webm" />
            Ваш браузер не поддерживает воспроизведение видео.
        </video>
    );
}
