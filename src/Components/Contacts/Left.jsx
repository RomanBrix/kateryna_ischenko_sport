import { ReactComponent as ArrowSvg } from "./svg/arrow.svg";
import { ReactComponent as ArrowRightSvg } from "./svg/arrowRight.svg";
import { ReactComponent as TelegaSvg } from "./svg/telega.svg";
import { ReactComponent as PhoneSvg } from "./svg/phone.svg";
import { ReactComponent as FbSvg } from "./svg/fb.svg";
import { ReactComponent as InstaSvg } from "./svg/insta.svg";

export default function LeftContact() {
    return (
        <div className="left">
            <div className="mini-head">Який зараз час?</div>
            <div className="head">Час Збиратися на тренування</div>

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

            <div className="mini-menu">
                <div className="menu-itm">
                    Цікавлять домашні тренування?
                    <div className="arw">
                        <ArrowRightSvg />
                    </div>
                </div>
                <div className="menu-itm">
                    Здорове харчування
                    <div className="arw">
                        <ArrowRightSvg />
                    </div>
                </div>
                <div className="menu-itm">
                    Позування
                    <div className="arw">
                        <ArrowRightSvg />
                    </div>
                </div>
                <div className="menu-itm">
                    Бади та вітаміни
                    <div className="arw">
                        <ArrowRightSvg />
                    </div>
                </div>
            </div>
        </div>
    );
}
