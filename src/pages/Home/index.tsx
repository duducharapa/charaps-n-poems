import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar";
import PoemCard from "../../components/PoemCard";
import { ListPoemsRequest, Poem } from "../../interfaces/poem";
import "./styles.css";
import Footer from "../../components/Footer";

const Home = () => {
    const [poems, setPoems] = useState<Poem[]>();
    
    const listPoems = useCallback(async () => {
        const { data } = await axios.get<ListPoemsRequest>(`${import.meta.env.VITE_API_URL}/poems`);
        
        setPoems(data.data);
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