import markdownIt from "markdown-it";
import { ReactComponent as FireSvg } from "./svg/fire.svg";
import { useNavigate } from "react-router-dom";

export default function Pluses() {
    const md = markdownIt({ html: true });
    const navigate = useNavigate();

    const blocks = [
        {
            icon: "src/pluses/weight_plate.png",
            text: "Я – Катерина Іщенко, і я – фітнес-тренер. Люблю допомагати людям досягати їхніх цілей у фітнесі, і я вірю, що кожен може бути здоровим і сильним.",
        },
        {
            icon: "src/pluses/kettlebell.png",
            text: "Маю ступінь у галузі фізичної терапії та багато років досвіду роботи з людьми різного рівня фізичної підготовки. Добре знаю анатомію та фізіологію, і я можу розробляти програми тренувань, які відповідають індивідуальним потребам кожного клієнта.",
        },
        {
            icon: "src/pluses/skipping_rope.png",
            text: "Завжди знаходжу способи допомогти клієнтам подолати їхні обмеження. Уважно відношусь до потреб клієнтів, і я завжди переконуюся, що вони займаються вправами безпечним і ефективним способом.",
        },
        {
            icon: "src/pluses/hand.png",
            text: "Постійно навчаюся новому. Я вважаю, що важливо бути в курсі останніх тенденцій у фітнесі, щоб я надала своїм клієнтам найкращий можливий досвід.",
        },
        {
            icon: "src/pluses/weight_machine.png",
            text: "Я розробляю індивідуальні плани харчування, які відповідають потребам кожного клієнта. Я також допомагаю своїм клієнтам впроваджувати зміни в їхній спосіб життя, щоб вони могли досягти своїх цілей на довгострокову перспективу.",
        },
        {
            icon: "src/pluses/love.png",
            text: "Я тут, щоб підтримати вас на кожному кроці вашого шляху. <span class='accent'> Зв’яжіться зі мною сьогодні, щоб почати!</span>",
            btn: "Почнемо",
            btn_icon: <FireSvg />,
            link: "/",
        },
    ];

    return (
        <div className="main pluses">
            <div
                className="bg"
                style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('/src/intro_bg.png'), lightgray 50% / cover no-repeat`,
                }}
            />
            <div className="content">
                <div className="title title-top">
                    Вимагай від себе неможливого
                </div>
                <div className="title title-bottom">і матимеш максимум</div>

                <div className="container">
                    <div className="l">{renderBlock(blocks, 0, 3)}</div>
                    <div className="c">
                        <img src="/src/katya_plus.png" alt="katya" />
                    </div>
                    <div className="l">{renderBlock(blocks, 3)}</div>
                </div>
            </div>
        </div>
    );

    function renderBlock(arr = [], from = 0, to = arr.length) {
        return arr
            .filter((_, index) => index >= from && index < to)
            .map((item) => {
                const textHtml = md.renderInline(item.text);
                return (
                    <div className="block" key={item.icon}>
                        <div className="img">
                            <img src={item.icon} alt="" />
                        </div>
                        <div
                            className="text"
                            dangerouslySetInnerHTML={{ __html: textHtml }}
                        />
                        {item?.btn && (
                            <button
                                onClick={() => {
                                    navigate(item.link);
                                }}
                            >
                                {item.btn_icon} {item.btn}
                            </button>
                        )}
                    </div>
                );
            });
    }
}
