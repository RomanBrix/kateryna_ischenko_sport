import { ReactComponent as HeartBeatSvg } from "./svg/heart_beat.svg";

export default function Main() {
    return (
        <div className="main">
            <div
                // background: ;
                className="bg"
                style={{
                    background: `linear-gradient(0deg, rgba(14, 14, 14, 0.85) 0%, rgba(14, 14, 14, 0.85) 100%), url('/src/intro_bg.png'), lightgray 50% / cover no-repeat`,
                }}
            />
            <div className="content">
                <div className="left">
                    <div className="head-before">
                        Привіт , я Катерина - і я чемпіонка світу та
                        персональний фітнес-тренер
                    </div>
                    <h1 className="FixelDisplay">
                        Почніть шлях справжніх змін Вже сьогодні
                    </h1>
                    <div className="head-before">
                        Моя програма враховує Ваші цілі, тип фігури та спосіб
                        життя, щоб створити індивідуальний план харчування та
                        тренувань саме для Вас.
                    </div>
                    <div className="btns btns-row">
                        <button className="accent-one">
                            Придбати тренування
                        </button>
                        <button className="accent-two">
                            Придбати харчування
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div className="info-block">
                        <div className="title">Active Calories</div>
                        <div className="info">
                            456 <span className="small">CAL</span>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="title">Workout Time</div>
                        <div className="info">1:02:36</div>
                    </div>
                    <div className="info-block">
                        <div className="title">Total Calories</div>
                        <div className="info">
                            286 <span className="small">CAL</span>
                        </div>
                    </div>

                    <img src="/src/katya.png" alt="" />
                    <HeartBeatSvg className="hear_svg" />
                </div>
            </div>
        </div>
    );
}
