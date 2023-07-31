export default function IntroFoodDelivery() {
    return (
        <div className="content">
            <div className="head">Здорова їжа, доставлена до ваших дверей</div>
            <div className="after-head">Переваги доставки їжі:</div>
            <div className="simple-blocks">
                <div className="block">
                    <div className="img">
                        <img src="/src/food_delivery/block_1.png" alt="" />
                    </div>
                    <div className="info">
                        <div className="title">Смачно</div>
                        <div className="desc">
                            Здорова їжа може бути смачною! Використовуємо свіжі
                            інгрерієнти та готуємо з любовью
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src="/src/food_delivery/block_2.png" alt="" />
                    </div>
                    <div className="info">
                        <div className="title">Зручно</div>
                        <div className="desc">
                            Ви можете замовити здорову їжу, не виходячи з дому.
                            Це ідеально підходить для зайнятих людей, які не
                            мають часу готувати.
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src="/src/food_delivery/block_3.png" alt="" />
                    </div>
                    <div className="info">
                        <div className="title">Різноманітно</div>
                        <div className="desc">
                            Коли ми їмо різноманітно, ми отримуємо всі необхідні
                            поживні речовини, які допомагають нам залишатися
                            здоровими та енергійними.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
