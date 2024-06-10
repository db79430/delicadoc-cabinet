import React, { useState } from 'react';
import {ConveyorBelt} from "../../components/play/ConveyorBelt";
import closedSuitcase1 from './img/Ч8.svg';
import closedSuitcase2 from './img/Ч15.svg';
import closedSuitcase3 from './img/Ч19.svg';
import closedSuitcase4 from './img/Ч16.svg';
import closedSuitcase5 from './img/Ч17.svg';
import closedSuitcase6 from './img/Ч20.svg';
import closedSuitcase7 from './img/Ч21.svg';
import closedSuitcase8 from './img/Ч22.svg';
import closedSuitcase9 from './img/Ч23.svg';
import closedSuitcase10 from './img/Ч24.svg';
import closedSuitcase11 from './img/Ч25.svg';


const closedSuitcases = [
    closedSuitcase1,
    closedSuitcase2,
    closedSuitcase3,
    closedSuitcase4,
    closedSuitcase5,
    closedSuitcase5,
    closedSuitcase6,
    closedSuitcase7,
    closedSuitcase8,
    closedSuitcase9,
    closedSuitcase10,
    closedSuitcase11
];


export const PlayContainer = () => {
    const initialSuitcases = Array(5).fill({ isOpen: false, hasPrize: false });
    const prizeIndex = Math.floor(Math.random() * initialSuitcases.length);
    initialSuitcases[prizeIndex].hasPrize = true;

    const [suitcases, setSuitcases] = useState(initialSuitcases);

    const handleSuitcaseClick = (index) => {
        setSuitcases((prevSuitcases) =>
            prevSuitcases.map((suitcase, i) =>
                i === index ? { ...suitcase, isOpen: true } : suitcase
            )
        );
    };

    return (
        <div className="play-container-main">
            <ConveyorBelt suitcases={suitcases} onSuitcaseClick={handleSuitcaseClick} closedSuitcases={closedSuitcases}/>
        </div>
    );
};
