export default function Programs() {
    const program_blocks = [
        {
            title: "Express Fit",
            icon: "/src/food_delivery/program_1.png",
            ccal: "800",
        },
        {
            title: "Slim",
            icon: "/src/food_delivery/program_2.png",
            ccal: "1000",
        },
        {
            title: "Fitness",
            icon: "/src/food_delivery/program_3.png",
            ccal: "1300",
        },
        {
            title: "Balance",
            icon: "/src/food_delivery/program_4.png",
            ccal: "1600",
        },
        {
            title: "Balance+",
            icon: "/src/food_delivery/program_5.png",
            ccal: "1800",
        },
        {
            title: "Strong",
            icon: "/src/food_delivery/program_6.png",
            ccal: "2000",
        },
        {
            title: "Maxi Fit",
            icon: "/src/food_delivery/program_7.png",
            ccal: "2100",
        },
        {
            title: "Veggie",
            icon: "/src/food_delivery/program_8.png",
            ccal: "2200",
        },
        {
            title: "Fish",
            icon: "/src/food_delivery/program_9.png",
            ccal: "2500",
        },
    ];
    return (
        <div className="programs">
            <div className="content">
                <div className="after-head">Програми харчування</div>
                <div className="blocks">{renderBlocks(program_blocks)}</div>
            </div>
        </div>
    );

    function renderBlocks(blocks) {
        return blocks.map((item) => {
            return (
                <div className="block" key={item.icon}>
                    <div className="title">{item.title}</div>
                    <div className="img">
                        <img src={item.icon} alt="" />
                    </div>
                    <div className="ccal">{item.ccal} ккал</div>
                </div>
            );
        });
    }
}
