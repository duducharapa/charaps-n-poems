import { useCallback, useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import PoemCard from "../../components/PoemCard";
import { Poem } from "../../interfaces/poem";
import "./styles.css";
import Footer from "../../components/Footer";
import api from "../../services/api";

const Home = () => {
    const [poems, setPoems] = useState<Poem[]>();
    
    const listPoems = useCallback(async () => {
        const data = await api.listPoems();
        
        setPoems(data);
    }, []);

    useEffect(() => {
        listPoems();
    }, [listPoems]);

    return (
        <>
            <Navbar />

            <main className="main">
                {
                    poems?.map(poem => (
                        <PoemCard poem={poem} key={poem.id} />
                    )) ?? []
                }
            </main>

            <Footer />
        </>
    );
};

export default Home;