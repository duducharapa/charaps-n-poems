import "./styles.css";
import arrow from "../../assets/arrow.svg";

import { PoemCardProps } from "./props";
import { useNavigate } from "react-router-dom";

const PoemCard = ({ poem }: PoemCardProps) => {
    const navigate = useNavigate();
    
    const firstVerse = poem.stanzas[0].verses[0].text;
    const secondVerse = poem.stanzas[0].verses[1].text;

    const navigateToPoem = () => {
        navigate(`/poem/${poem.id}`, {
            state: { poem }
        });
    }

    return (
        <section className="poem-card" onClick={navigateToPoem}>
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