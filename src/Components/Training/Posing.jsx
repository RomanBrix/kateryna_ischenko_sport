import TariningBlock from "./Block";
import { ReactComponent as ArmSvg } from "./svg/arm.svg";

export default function Posing() {
    const data = [
        {
            title: "Чому це важливо?",
            about: `Позування для бодібілдера – важливий і навіть вирішальний чинник успіху на змаганнях. Позування впливає на результат суддівства, показує спортсмена у вигідному світлі, демонструючи його сильні сторони, а й загалом вміти триматися на сцені важливо для кожного атлета.`,
            btn_text: "Придбати",
            btn_icon: <ArmSvg />,
            img: "/src/training/training6.png",
            view: "img-top",
        },
        {
            title: "Що Ви отримаєте?",
            about: `* Інформацію про вираз обличчя\n* Динаміка тіла\n* Правильна постанова\n* Як підкреслити м’язи\n* Образ на сцені\n* Про правильне дихання\n* Стиль та подача`,
            btn_text: "Придбати",
            btn_icon: <ArmSvg />,
            img: "/src/training/training7.png",
            view: "img-top",
        },
    ];

    return (
        <div className="posing">
            <div className="content">
                <h1>
                    Також Ви можете придбати гайд “Позування для професіоналів”
                </h1>

                <div className="flex-row">
                    <div className="blocks-wraper">
                        <TariningBlock data={data[0]} />
                    </div>
                    <div className="c">
                        <img src="/src/training/trainingMan.png" alt="" />
                    </div>
                    <div className="blocks-wraper">
                        <TariningBlock data={data[1]} />
                    </div>
                </div>
            </div>
        </div>
    );
}
