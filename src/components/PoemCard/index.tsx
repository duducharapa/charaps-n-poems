import "./styles.css";

import { PoemCardProps } from "./props";
import { useNavigate } from "react-router-dom";

const PoemCard = ({ poem }: PoemCardProps) => {
    const navigate = useNavigate();
    
    const firstVerses = [
        ...poem.stanzas[0].verses
    ];

    const navigateToPoem = () => {
        navigate(`/poem/${poem.id}`, {
            state: { poem }
        });
    }

    return (
        <section className="poem-card" onClick={navigateToPoem}>
            <h2 className="poem-card-title">{poem.name}</h2>

            {
                firstVerses.map(({ text }) => <p className="poem-card-verse">{text}</p>)
            }
        </section>
    );
}

export default PoemCard;