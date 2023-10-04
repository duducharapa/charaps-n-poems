import { ScrollRestoration, useLocation } from "react-router-dom";
import "./styles.css";

import { PoemViewLocation } from "./props";

const PoemView = () => {
    const { poem } = useLocation().state as PoemViewLocation;
    const { stanzas, name } = poem;

    return (
        <>
            <ScrollRestoration />
            <main className="poem-view-container">
                <h1 className="poem-view-title">{name}</h1>

                {
                    stanzas.map(({ id, verses }) => (
                        <div key={id} className="poem-view-stanza">
                            {
                                verses.map(({ id, text }) => (
                                    <p key={id} className="poem-view-verse">{text}</p>
                                ))
                            }
                        </div>
                    ))
                }
            </main>
        </>
    );
}

export default PoemView;
