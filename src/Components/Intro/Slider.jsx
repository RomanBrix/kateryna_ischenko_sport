import { useState } from "react";
import { useRef } from "react";

export default function Slider() {
    const sliderItems = [
        {
            img: "/src/slider/fa2b92425fdbdce46321657a10087a9c.png",
            title: "Переможниця Fitness Sports Games 2021",
        },
        {
            img: "/src/slider/Rectangle.png",
            title: "Чемпіонка світу 2022",
        },
        {
            img: "/src/slider/484e27d8d91010f60ca94ea872347442.png",
            title: "Майстер спорту міжнародного класу",
        },
        {
            img: "/src/slider/2c0d2f153f505f36974798335e2e943e.png",
            title: "Чемпіонка України 2021",
        },
        {
            img: "/src/slider/eaa4f0e5fee7f6f590998350176f1582.png",
            title: "Переможниця Арнольд Класік 2022",
        },
        {
            img: "/src/slider/eaa4f0e5fee7f6f590998350176f1582.png",
            title: "Test test",
        },
        {
            img: "/src/slider/eaa4f0e5fee7f6f590998350176f1582.png",
            title: "Test test",
        },
        {
            img: "/src/slider/eaa4f0e5fee7f6f590998350176f1582.png",
            title: "Test test",
        },
        {
            img: "/src/slider/eaa4f0e5fee7f6f590998350176f1582.png",
            title: "Test test",
        },
    ];

    const scrollElem = useRef(null);
    const [pos, setPos] = useState({ elem: 0, mouse: 0 });
    const [grab, setGrab] = useState(false);

    return (
        <div className="slider">
            <div className="content">
                <h1>Тренуйся з метою, перемагай із пристрастю</h1>

                <div
                    className="imgs-holder"
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
                    {renderSliderBlocks(sliderItems)}
                </div>
            </div>
        </div>
    );

    function renderSliderBlocks(blocks) {
        return blocks.map((item) => {
            return (
                <div className="slider-block" key={item.img}>
                    <div className="photo">
                        <img src={item.img} alt="img" />
                    </div>
                    <div className="title">{item.title}</div>
                </div>
            );
        });
    }
}
