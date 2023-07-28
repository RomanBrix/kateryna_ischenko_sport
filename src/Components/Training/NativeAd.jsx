import TariningBlock from "./Block";
import { ReactComponent as ArmSvg } from "./svg/arm.svg";
import { ReactComponent as QuoteSvg } from "./svg/quote.svg";
import { ReactComponent as CenterArrowSvg } from "./svg/centerArrow.svg";

export default function NativeAd() {
    const data = {
        title: "Домашні тренування",
        about: `Заплануйте свій розклад, заздалегідь визначте час для тренувань, виберіть вправи, які вам до душі, і практикуйте їх регулярно. Збереження постійного графіку допоможе вам досягати результатів і зробить процес тренування більш систематичним. Завжди пам'ятайте про важливість розминки перед тренуванням і охолодження після нього.`,
        // btn_text: "Консультація",
        // btn_icon: <ArmSvg />,
        img: "/src/training/training5.png",
        view: "img-right dark-one",
    };

    return (
        <div className="native-ad ">
            <div className="content">
                <div className="arrow-img">
                    <CenterArrowSvg />
                </div>
                <div className="left">
                    <h1>
                        Не маєте змоги відвідувати фітнес-клуб? але при цьому
                        хочете підтримувати своє здоров`я?{" "}
                        <span className="accent-one"> Вихід є!</span>
                    </h1>
                    <div className="info-text">
                        <QuoteSvg />
                        <span>
                            Секрет успіху в домашньому тренуванні - це зробити
                            перший крок, потім - ще один - Мері Хайл
                        </span>
                        <QuoteSvg />
                    </div>
                    <button className="accent-one">
                        <ArmSvg />
                        Придбати тренування
                    </button>
                </div>
                <div className="right blocks-wraper">
                    <TariningBlock data={data} />
                </div>
            </div>
        </div>
    );
}
