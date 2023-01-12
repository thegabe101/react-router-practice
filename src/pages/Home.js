import { useContext } from "react"
import { AppContext } from "../App"


export const Home = (props) => {
    const { userName, getUsername } = useContext(AppContext);

    return (
        <div>
            <h1>Home</h1>
            <h1>{getUsername}'s Page</h1>
        </div>
    )
}