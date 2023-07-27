import { ReactComponent as LogoSvg } from "./svg/gurya.svg";
import { ReactComponent as TelegaSvg } from "./svg/telega.svg";
import { ReactComponent as PhoneSvg } from "./svg/phone.svg";
import { ReactComponent as FbSvg } from "./svg/fb.svg";
import { ReactComponent as InstaSvg } from "./svg/insta.svg";

export default function Footer() {
    return (
        <footer>
            <div className="content">
                <div className="block">
                    <div className="logo">
                        <div className="top">Kateryna</div>
                        <div className="bottom">
                            <LogoSvg />
                            Ishchenko
                        </div>
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
                    <div className="map">
                        <a
                            href="https://goo.gl/maps/PWFXV5DzKL7SYRMd6"
                            target="_blank"
                            rel="noreferrer"
                        >
                            вул. Героїв України, 21а, Бровари, Київська обл.,
                            07400
                        </a>
                    </div>
                </div>
                <div className="block">
                    <ul className="menu">
                        <li>Головна</li>
                        <li>Харчування</li>
                        <li>Розрахунок продуктів</li>
                        <li>Замовити харчування</li>
                    </ul>
                </div>
                <div className="block">
                    <ul className="menu">
                        <li>Тренування</li>
                        <li>Бонуси</li>
                        <li>Партнери</li>
                        <li>Контакти</li>
                    </ul>
                </div>
                <div className="block">
                    <ul className="menu">
                        <li>Оплата</li>
                        <li>Доставка</li>
                        <li>Гарантія та повернення</li>
                        <li>Угода користувача</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
