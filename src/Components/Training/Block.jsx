import ReactMarkdown from "react-markdown";

export default function TariningBlock({ data }) {
    /*
    data = {
        title
        about
        btn_text
        btn_icon
        img
        view: 'right'
    }
    */

    return (
        <div className={`block ${data.view}`}>
            <div className="block-content">
                <div className="title">{data.title}</div>
                <ReactMarkdown children={data.about} />
                {data.btn_text && (
                    <button>
                        {data.btn_icon} {data.btn_text}
                    </button>
                )}
            </div>
            <div className="img">
                <img src={data.img} alt="" />
            </div>
        </div>
    );
}
