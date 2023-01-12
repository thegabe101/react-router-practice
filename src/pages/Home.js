import { useContext } from "react"
import { AppContext } from "../App"


export const Home = (props) => {
    const { userName } = useContext(AppContext);

    return (
        <div>
            <h1>Home</h1>
            <h1>{userName}'s Page</h1>
        </div>
    )
}