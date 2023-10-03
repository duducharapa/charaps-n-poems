import "./styles.css";
import arrow from "../../assets/arrow.svg";

import { PoemCardProps } from "./props";

const PoemCard = ({ poem }: PoemCardProps) => {
    const firstVerse = poem.stanzas[0].verses[0].text;
    const secondVerse = poem.stanzas[0].verses[1].text;

    return (
        <section className="poem-card">
            <h2 className="poem-card-title">{poem.name}</h2>

            <p className="poem-card-verse">{firstVerse}</p>
            <p className="poem-card-verse">{secondVerse}</p>
            <p className="poem-card-verse">...</p>

            <div className="poem-card-more-container">
                <img src={arrow} alt="arrow-down" className="poem-card-more" />
            </div>
        </section>
    );
}

export default PoemCard;