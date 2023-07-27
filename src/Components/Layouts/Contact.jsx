import { ReactComponent as ArrowSvg } from "./svg/arrow.svg";
import { ReactComponent as StartSvg } from "./svg/star.svg";

import { ReactComponent as TelegaSvg } from "./svg/telega.svg";
import { ReactComponent as PhoneSvg } from "./svg/phone.svg";
import { ReactComponent as FbSvg } from "./svg/fb.svg";
import { ReactComponent as InstaSvg } from "./svg/insta.svg";

export default function Contact() {
    return (
        <div className="contact">
            <div
                className="bg"
                style={{
                    background: `linear-gradient(0deg, rgba(14, 14, 14, 0.70) 0%, rgba(14, 14, 14, 0.70) 100%), url('/src/contact_bg.png'), lightgray 50% / cover no-repeat`,
                }}
            />

            <div className="content">
                <h1>
                    Для більш детальної інформації та консультації залиште
                    заявку, або зв’яжіться зі мною
                </h1>
                <div className="form">
                    <div className="inputs">
                        <label htmlFor="name">Ім’я</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Введіть своє повне ім'я"
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor="phone">Номер телефону</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Введіть свій номер"
                        />
                    </div>
                    <button className="accent-one">
                        <ArrowSvg /> Відправити
                    </button>
                </div>

                <div className="socs">
                    <div className="soc-btn">
                        <TelegaSvg /> Telegram
                    </div>
                    <div className="soc-btn">
                        <PhoneSvg /> Phone
                    </div>
                    <div className="soc-btn">
                        <FbSvg /> Facebook
                    </div>
                    <div className="soc-btn">
                        <InstaSvg /> Instagram
                    </div>
                </div>
                <div className="bottom">
                    <div className="go-line">{getLine()}</div>
                </div>
            </div>
        </div>
    );

    function getLine(n = 5) {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(
                <div className="line" key={i}>
                    Придбай план тренування , чи харчування та отримуй бонус
                    <StartSvg />
                </div>
            );
        }
        return arr;
    }
}
