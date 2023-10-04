import axios from "axios";
import { ListPoemsRequest } from "../interfaces/poem";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

const listPoems = async () => {
    const { data } = await api.get<ListPoemsRequest>("/poems");

    return data.data || [];
}

export default {
    listPoems,
}