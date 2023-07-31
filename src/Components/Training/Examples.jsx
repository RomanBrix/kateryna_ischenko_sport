import VideoPlayer from "./VideoPlayer";
import { ReactComponent as ArmSvg } from "./svg/arm.svg";

export default function Examples() {
    return (
        <div className="example">
            <div className="content">
                <h1>Оберіть для себе спорт де б ви не були</h1>
                <div className="flex-row">
                    <div className="blocks">
                        <div className="block">
                            <div className="title">Тренування в залі</div>
                            <div className="desc">
                                Тренування в залі можуть бути різними за
                                інтенсивністю, тривалістю та складністю. Існує
                                безліч різних програм тренувань, які підходять
                                для різних цілей і рівнів підготовки.
                            </div>
                            <div className="title">Оберіть рівень:</div>
                            <div className="imgs">
                                <div className="img">
                                    <div className="t">Новачок</div>
                                    <img
                                        src="/src/training/training1_1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="img">
                                    <div className="t">Профі</div>
                                    <img
                                        src="/src/training/training1_2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <button className="accent-one">
                                <ArmSvg />
                                Придбати
                            </button>
                        </div>
                    </div>
                    <div className="c">
                        <div className="gif">
                            <VideoPlayer src={"/src/training/1.webm"} />
                        </div>
                        <div className="gif">
                            <VideoPlayer src={"/src/training/2.webm"} />
                        </div>
                        <div className="gif">
                            <VideoPlayer src={"/src/training/3.webm"} />
                        </div>
                        <div className="gif">
                            <VideoPlayer src={"/src/training/4.webm"} />
                        </div>
                    </div>
                    <div className="blocks">
                        <div className="block">
                            <div className="title">Домашні тренування</div>
                            <div className="desc">
                                Ви можете тренуватися в будь-який час і в
                                будь-якому місці. Вам не потрібно їздити в
                                спортзал або чекати, поки звільниться тренажер.
                            </div>
                            <div className="title">Оберіть рівень:</div>
                            <div className="imgs">
                                <div className="img">
                                    <div className="t">Новачок</div>
                                    <img
                                        src="/src/training/training2_1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="img">
                                    <div className="t">Профі</div>
                                    <img
                                        src="/src/training/training2_2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <button className="accent-one">
                                <ArmSvg />
                                Придбати
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
