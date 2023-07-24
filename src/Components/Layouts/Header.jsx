import { ReactComponent as LogoSvg } from "./svg/gurya.svg";
import { ReactComponent as ArrowSvg } from "./svg/arrow.svg";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const header = headerRef.current;
        if (scrolled && headerRef) {
            if (!header.classList.contains("scrolled-bg"))
                header.classList.add("scrolled-bg");
        } else if (!scrolled && header.classList.contains("scrolled-bg")) {
            header.classList.remove("scrolled-bg");
        }
    }, [scrolled]);

    return (
        <header ref={headerRef}>
            <div className="content">
                <div className="logo">
                    <div className="top">Kateryna</div>
                    <div className="bottom">
                        <LogoSvg />
                        Ishchenko
                    </div>
                </div>

                <ul className="menu">
                    <li>Головна</li>
                    <li>Харчування</li>
                    <li>Тренування</li>
                    <li>Розрахунок продуктів</li>
                    <li>Замовити харчування</li>
                    <li>Партнери</li>
                    <li>Контакти</li>
                </ul>

                <button className="accent-one">
                    <ArrowSvg /> Придбати тренування
                </button>
            </div>
        </header>
    );
}
