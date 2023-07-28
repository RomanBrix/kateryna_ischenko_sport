import TariningBlock from "./Block";
import { ReactComponent as ArmSvg } from "./svg/arm.svg";

export default function Categories() {
    const data = [
        {
            title: "Силові тренування",
            about: `Силові тренування мають багато переваг для здоров'я, зокрема:\n* Збільшення м'язової маси та сили\n* Покращення витривалості\n* Зниження ризику травм\n* Покращення постави / Збільшення метаболізму / Покращення настрою і самопочуття / Зменшення стресу`,
            btn_text: "Консультація",
            btn_icon: <ArmSvg />,
            img: "/src/training/training1.png",
            view: "img-right mini-max-width",
        },
        {
            title: "Кардіо тренування",
            about: `Переваги:\n* Зниження ризику серцево-судинних захворювань / Зниження кров'яного тиску\n* Зниження рівня холестерину\n* Зниження ваги / Покращення контролю цукру в крові / Покращення дихальної функції\n* Покращення настрою / Покращення сну\n* Збільшення витривалості`,
            btn_text: "Консультація",
            btn_icon: <ArmSvg />,
            img: "/src/training/training2.png",
            view: "img-right",
        },
        {
            title: "Відновлювальні тренування",
            about: `Ось деякі переваги відновлювальних тренувань:\n* Покращують відновлення м’язів\n* Зменшують біль у м’язах\n* Збільшують витривалість\n* Покращують настрій\n* Знижують стрес\n* Покращують якість сну`,
            btn_text: "Консультація",
            btn_icon: <ArmSvg />,
            img: "/src/training/training3.png",
            view: "img-right",
        },
        {
            title: "Функціональне тренування",
            about: `Ось деякі переваги функціональних тренувань:\n* Покращують рухливість / Збільшують силу\n* Зміцнюють м’язи кора\n* Покращують координацію\n* Зменшують ризик травм\n* Покращують настрій\n* Знижують стрес\n* Покращують якість сну`,
            btn_text: "Консультація",
            btn_icon: <ArmSvg />,
            img: "/src/training/training4.png",
            view: "img-right",
        },
    ];

    return <div className="categories blocks-wraper">{renderBlock(data)}</div>;
    function renderBlock(arr = []) {
        return arr.map((blockData) => {
            return <TariningBlock data={blockData} key={blockData.img} />;
        });
    }
}
