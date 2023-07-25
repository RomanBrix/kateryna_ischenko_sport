import Main from "../Components/Intro/Main";
import Pluses from "../Components/Intro/Pluses";
import Programs from "../Components/Intro/Programs";

export default function Intro() {
    return (
        <div className="Intro">
            {/* <h1>asd</h1> */}
            <Main />
            <Programs />
            <Pluses />
        </div>
    );
}
