import './Card.css'

import { useState } from "react";


export function Card({ url }) {
    const [checkCard, setCheckCard] = useState(false);

    const handleClick = () => {
        setCheckCard(!checkCard);
    }
    let className = `card ${checkCard ? 'card-check' : ''}`;
    return (
        <div
            className={className}
            onClick={handleClick}
           
        >
           <img src={url} alt="" />
        </div>
    );
}