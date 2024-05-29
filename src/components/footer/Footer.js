import React from "react";
import CustomButton from "../../common/button/Button";
import "./Footer.css"
import "./FooterMedia.css"

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-general">
                <div className="rules">
                    <a className="text-rules">
                        Правила пользования сайтом
                    </a>
                    <a className="text-rules">
                        Правила Акции
                    </a>
                    <a className="text-rules">
                        Правила в области обработки ПД
                    </a>
                </div>
                <div className="footer-phone">
                    <div className="footer-circle">
                        <p className="footer-age">18+</p>
                    </div>
                    <div className="footer-service-phone">
                        <p className="footer-text">
                            Телефон горячей линии
                        </p>
                        <p className="footer-phone-number">
                            +7 800 500 32 25
                        </p>
                    </div>
                </div>
                <div className="footer-service">
                    <p className="footer-text">Служба поддержки</p>
                    <div>
                        <CustomButton text={"Написать в поддержку"}
                                      color="green"
                                      textColor="white"
                                      size="dg"
                        />
                    </div>
                </div>
            </div>
            <div className="footer-promotion">
                Акция проходит во всех магазинах торговой сети «Перекрёсток»
                и «Пятёрочка» на территории Российской Федерации.
                Общий срок проведения акции, включая выдачу призов — с 27.05.2024 г. по 28.08.2024 г. включительно
                по московскому времени. В акции участвует продукция под товарным знаком Delicados (полный перечень продукции приведён в правилах акции).
                С подробной информацией об организаторе акции,
                правилах и сроках её проведения, количестве призов, сроках, месте и порядке их получения вы можете ознакомиться на сайте delicados-promo.ru и по QR-коду. Количество призов ограничено. Призы могут отличаться от изображённых на рекламных материалах.
            </div>
        </div>
    )
}