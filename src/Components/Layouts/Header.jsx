import { ReactComponent as LogoSvg } from "./svg/gurya.svg";
import { ReactComponent as ArrowSvg } from "./svg/arrow.svg";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        checkActiveClass();
    }, [pathname]);
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
                <div
                    className="logo"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <div className="top">Kateryna</div>
                    <div className="bottom">
                        <LogoSvg />
                        Ishchenko
                    </div>
                </div>

                <ul className="menu">
                    <li onClick={changeLocation} data-link="/">
                        Головна
                    </li>
                    <li onClick={changeLocation} data-link="/">
                        Харчування
                    </li>
                    <li onClick={changeLocation} data-link="/training">
                        Тренування
                    </li>
                    <li onClick={changeLocation} data-link="/">
                        Розрахунок продуктів
                    </li>
                    <li onClick={changeLocation} data-link="/">
                        Замовити харчування
                    </li>
                    <li onClick={changeLocation} data-link="/partners">
                        Партнери
                    </li>
                    <li onClick={changeLocation} data-link="/contact">
                        Контакти
                    </li>
                </ul>

                <button className="accent-one">
                    <ArrowSvg /> Придбати тренування
                </button>
            </div>
        </header>
    );
    function checkActiveClass() {
        const activeElement = document.querySelector("header .menu .active");
        if (activeElement) activeElement.classList.remove("active");
        if (pathname === "/")
            return headerRef.current.classList.remove("white-head");
        if (pathname === "/contact") {
            headerRef.current.classList.remove("white-head");
        } else {
            console.log(headerRef.current.classList.contains("white-head"));
            if (!headerRef.current.classList.contains("white-head")) {
                headerRef.current.classList.add("white-head");
            }
        }
        const newActive = document.querySelector(
            `header .menu li[data-link="${pathname}"]`
        );
        console.log(newActive);
        if (newActive) newActive.classList.add("active");
        // console.log(pathname);
        // console.log(target.dataset.link);
    }

    function changeLocation({ target }) {
        if (target?.dataset?.link) {
            navigate(target.dataset.link);
        }
    }
}
