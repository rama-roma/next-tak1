import axios from "axios";

const API = "https://695cd93979f2f34749d60ff3.mockapi.io/user";

export const loginAgent = async (name: string, level: string) => {
    const res = await axios.post(API, {
        agents: name,
        level: level,
    });
    return res.data;
};