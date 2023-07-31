import { ReactComponent as ArmSvg } from "./svg/arm.svg";
import { ReactComponent as AppleSvg } from "./svg/apple.svg";
import { ReactComponent as BrokoliSvg } from "./svg/brokoli.svg";
import { ReactComponent as MangoSvg } from "./svg/mango.svg";

export default function IntroNutrition() {
    const blocks = [
        {
            title: "Сушка тіла",
            text: "Сушка тіла – це процес зменшення відсотка жиру в організмі до мінімуму, щоб надати м’язам рельєфності. Це можна зробити за допомогою дієти та тренувань. Сушка тіла – це складний процес, який вимагає часу і зусиль. Однак це може бути дуже корисно для вашого здоров’я та зовнішності.",
            icon: "/src/nutrition/block_1.png",
            btn: "Придбати харчування",
            btn_svg: <MangoSvg />,
            // link: "/",
            className: "",
        },
        {
            title: "Зменшення ваги",
            text: "Раціон включає прості смачні рецепти: корисні, безпечні для організму. Програма містить потрібні вітаміни і мінеральні речовини, швидко і легко засвоюється та не шкодить здоров’ю.",
            icon: "/src/nutrition/block_2.png",
            btn: "Придбати харчування",
            btn_svg: <BrokoliSvg />,
            // link: "/",
            className: "mini-to-left",
        },
        {
            title: "Набір м’язової маси",
            text: "План харчування враховує ваш тип статури, дієтичні уподобання та цілі, щоб створити план набору ваги, який підходить саме вам. Попрощайтеся з підрахунком калорій або відстеженням макросів. Отримайте персоналізований план за лічені хвилини.",
            icon: "/src/nutrition/block_3.png",
            btn: "Придбати харчування",
            btn_svg: <ArmSvg />,
            className: "mini-to-left",

            // link: "/",
        },
        {
            title: "Підтримка форми",
            text: "Здорове харчування не повинно бути нудним чи складним. За цією програмою ви отримаєте збалансовані, смачні страви, які допоможуть вам залишатися на висоті ваших фітнес-цілей.",
            // ad_text : '*Придбати бади можна лише за моєю консультацією'
            icon: "/src/nutrition/block_4.png",
            btn: "Придбати харчування",
            btn_svg: <AppleSvg />,
            className: "mini-to-left",

            // link: "/",
        },
    ];
    return (
        <div className="content">
            <div className="head">
                Змініть свої харчові звички завдяки персональній програмі
                харчування
            </div>
            <div className="after-head">Оберіть програму харчування:</div>
            <div className="action-block-container">{renderBlocks(blocks)}</div>
        </div>
    );

    function renderBlocks(blocks) {
        return blocks.map((item) => {
            const { title, text, icon, btn, btn_svg } = item;

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
                            // navigate(link);
                        }}
                    >
                        {btn_svg} {btn}
                    </button>
                </div>
            );
        });
    }
}
