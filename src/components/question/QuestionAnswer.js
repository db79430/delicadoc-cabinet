import React from "react";
import "./QuestionAnswer.css"
import {Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import beanbag from "../ask-question/img/group46.svg"
import cactusleft from "../ask-question/img/Group4712.svg"
import cactusright from "../ask-question/img/Group4711.svg"
import cactus from "../ask-question/img/Group.svg"
import CustomButton from "../../common/button/Button";
import {AskQuestion} from "../ask-question/AskQuestion";


export const QuestionAnswer = () => {
    return (
        <div>
            <Container className="question-container">
                <h1 className="text-item">Вопрос-ответ</h1>
                <Accordion>
                    <AccordionSummary className="accordion-item"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography className="text-accordion">КТО ЯВЛЯЕТСЯ ОРГАНИЗАТОРОМ АКЦИИ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Организатором акции является ООО «Мирвест»
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-item">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography className="text-accordion">Какие сроки проведения Акции?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Общий срок проведения Акции: с 27.05.2024 г. по 28.08.2024 г., включая период выдачи Призов.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-item">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography>Как принять участие в Акции?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Для участия в акции необходимо посетить торговые сети группы компаний «Х5 Group» под вывеской с наименованиями
                            «Перекресток» и «Пятерочка» на территории Российской Федерации с 27.05.2024 г. по 27.07.2024 г. включительно;
                            Купить продукцию Delicados в одной из торговых сетей группы компаний «Х5 Group» под вывеской с наименованиями «Перекресток» и «Пятерочка» на территории Российской Федерации; Зарегистрировать кассовый чек следующим способом: пройти процедуру регистрации на Сайте https://delicados-promo.ru или в чат-боте в мессенджере Telegram и загрузить копию или фотографию чека, отвечающую техническим требованиям, указанным в правилах акции, нажав на кнопку - «Загрузить чек» или ввести данные чека вручную, используя форму «Ввести вручную».
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-item">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography>Как принять участие в игре?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            1.Пройти регистрацию на Сайте или в чат-боте в мессенджере Telegram.
                            2.Зарегистрировать чек
                            3.Нажать на кнопку «играть» на Сайте.
                            4.Нажимать на движущиеся по ленте чемоданы в дополненной реальности и искать внутри чемоданов пачку начос под товарным знаком «Delicados» со вкусом «Бургер Воппер».
                            5.При этом Участнику игры дается 30 (Тридцать) секунд на одну Игру.
                            6.Одна Игра – при регистрации 1 (Одного) Чека
                            7.Игра завершается автоматически, после истечения тридцати секунд.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-item">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography>Почему, когда я нажимаю на кнопку «играть» на Сайте, загрузка чека не требуется, хотя по правилам Одна Игра – при регистрации 1 (Одного) Чека?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Участникам дается одна пробная игра, без загрузки чека
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-item">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography>Что я могу получить за участие в игре?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            За необходимое количество найденных пачек (1 пачка=1 балл)
                            Участник игры получает один Продуктовый приз: 5 пачек = 5 баллов = =Купон на «Воппер Джуниор» в подарок в мобильном приложении
                            «Бургер Кинг» или на сайте https://burgerkingrus.ru/
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <AskQuestion/>
            </Container>
        </div>
    )
}