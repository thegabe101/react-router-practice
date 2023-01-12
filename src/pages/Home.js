import { useContext } from "react"
import { AppContext } from "../App"
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


export const Home = () => {
    const { userName, getUsername } = useContext(AppContext);
    const { data, isLoading, refetch } = useQuery(["cat"], () => {
        return axios.get('https://catfact.ninja/fact').then((res) =>
            res.data);
    });

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Home</h1>
            <h1>{getUsername}'s Page </h1>
            <p>{data?.fact}</p>
            <button onClick={refetch}>Update Data</button>
        </div>
    )
}