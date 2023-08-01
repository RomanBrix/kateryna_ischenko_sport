import { useRef, useState } from "react";

export default function MenuPhotos() {
    const scrollElem = useRef(null);
    const [pos, setPos] = useState({ elem: 0, mouse: 0 });
    const [grab, setGrab] = useState(false);

    const main_src = "/src/food_delivery/menu_imgs/";
    const photos = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
    ];
    return (
        <div className="menu-photos">
            <div className="content">
                <div className="after-head">Наші страви в світлинах</div>
                <em>Заметка: фото меняються исходя от выбранного меню</em>
            </div>
            <div
                className="photos-container"
                ref={scrollElem}
                onMouseMove={(e) => {
                    if (grab) {
                        const goPos = e.clientX - pos.mouse;
                        scrollElem.current.scrollLeft = pos.elem - goPos;
                    }
                }}
                onMouseDown={(e) => {
                    // console.log(e.clientX);
                    setPos((prev) => ({
                        elem: scrollElem.current.scrollLeft,
                        mouse: e.clientX,
                    }));
                    setGrab(true);
                    scrollElem.current.style.cursor = "grabbing";
                }}
                onMouseUp={() => {
                    setGrab(false);
                    scrollElem.current.style.cursor = "grab";
                }}
            >
                {renderPhotos(photos)}
            </div>
        </div>
    );
    function renderPhotos(imgs) {
        return imgs.map((item, index) => {
            return (
                <div className="slider-item" key={item + index}>
                    <img src={main_src + item} alt="" />
                </div>
            );
        });
    }
}
