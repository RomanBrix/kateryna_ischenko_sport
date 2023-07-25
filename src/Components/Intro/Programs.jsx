import { ReactComponent as FireSvg } from "./svg/fire.svg";
import { ReactComponent as FishSvg } from "./svg/fish.svg";
import { ReactComponent as ArmSvg } from "./svg/arm.svg";
import { ReactComponent as BudSvg } from "./svg/bud.svg";
import { ReactComponent as ArrowSvg } from "./svg/arrow.svg";
import { useNavigate } from "react-router-dom";

export default function Programs() {
    const blocks = [
        {
            title: "Тренування",
            text: "Оберіть план, який відповідає вашим конкретним потребам і фітнес-цілям. Незалежно від того, чи ви тільки починаєте, намагаєтеся повернутися чи піднімаєте свою фізичну форму на новий рівень, ми допоможемо вам досягти максимальної продуктивності безпечно та ефективно.",
            icon: "/src/blocks/plate.png",
            btn: "Почнемо",
            btn_svg: <FireSvg />,
            link: "/",
            className: "mini-to-left",
        },
        {
            title: "Харчування",
            text: "Отримайте персоналізований план харчування відповідно до вашого способу життя та дієтичних уподобань. Спеціальні плани харчування допомагають досягти ваших цілей щодо харчування, створюючи плани харчування на основі ваших індивідуальних потреб.",
            icon: "/src/blocks/pakunok.png",
            btn: "Підібрати",
            btn_svg: <FishSvg />,
            link: "/",
        },
        {
            title: "Позування",
            text: "Позування для бодібілдера – важливий і навіть вирішальний чинник успіху на змаганнях. Позування впливає на результат суддівства, показує спортсмена у вигідному світлі, демонструючи його сильні сторони, а й загалом вміти триматися на сцені важливо для кожного атлета.",
            icon: "/src/blocks/arm.png",
            btn: "Навчитись",
            btn_svg: <ArmSvg />,
            link: "/",
        },
        {
            title: "Бади та вітаміни",
            text: "Отримайте основні поживні речовини, необхідні для кращого здоров’я, енергії та самопочуття, завдяки нашому широкому вибору вітамінів та добавок. Покращуйте своє здоров’я за допомогою правильних вітамінів",
            // ad_text : '*Придбати бади можна лише за моєю консультацією'
            icon: "/src/blocks/buds.png",
            btn: "Придбати",
            btn_svg: <BudSvg />,
            link: "/",
        },
    ];

    const navigate = useNavigate();
    return (
        <div className="programs">
            <div className="content">
                <h1 className="head-center">
                    Програма здорового харчування та тренувань, створена саме
                    для вас
                </h1>
                <div className="block-container">{renderBlocks(blocks)}</div>
                <div className="navi">
                    <div className="text">
                        *Придбай план тренування , чи харчування та отримуй
                        бонус
                    </div>
                    <div className="mini-btn">
                        Детальніше про бонус{" "}
                        <div className="svg">
                            <ArrowSvg />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function renderBlocks(blocks) {
        return blocks.map((item) => {
            const { title, text, icon, btn, btn_svg, link } = item;

            return (
                <div
                    className={`block ${
                        item?.className ? item?.className : ""
                    }`}
                    key={icon}
                >
                    <div className="title">{title}</div>
                    <div className="text">{text}</div>
                    <div className="icon">
                        <img src={icon} alt="" />
                    </div>

                    <button
                        className="accent-one"
                        onClick={() => {
                            navigate(link);
                        }}
                    >
                        {btn_svg} {btn}
                    </button>
                </div>
            );
        });
    }
}
