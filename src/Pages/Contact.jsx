import LeftContact from "../Components/Contacts/Left";
import RightContant from "../Components/Contacts/Right";

export default function ContactPage() {
    return (
        <div className="contact-page page">
            <div
                className="bg"
                style={{
                    background: `linear-gradient(0deg, rgba(14, 14, 14, 0.85) 0%, rgba(14, 14, 14, 0.85) 100%), url('/src/intro_bg.png'), lightgray 50% / cover no-repeat`,
                }}
            />
            <div className="content">
                <LeftContact />
                <RightContant />
            </div>
        </div>
    );
}
