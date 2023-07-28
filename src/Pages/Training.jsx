import Categories from "../Components/Training/Categories";
import NativeAd from "../Components/Training/NativeAd";
import Posing from "../Components/Training/Posing";

export default function TrainingPage() {
    return (
        <div className="training-page page">
            <div className="content">
                <div className="head">Жодних виправдань, лише результат!</div>
                <div className="after-head">
                    Види тренувань , які я проводжу:
                </div>
                <Categories />
            </div>
            <NativeAd />
            <Posing />
        </div>
    );
}
