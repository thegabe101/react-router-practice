import React, { useContext } from 'react'
import { ChangeProfile } from '../components/ChangeProfile'
import { AppContext } from '../App';



export const Profile = () => {
    const { userName, getUsername } = useContext(AppContext);


    return (
        <div><h1>{getUsername}'s Profile</h1>
            <ChangeProfile /></div>
    )
}
