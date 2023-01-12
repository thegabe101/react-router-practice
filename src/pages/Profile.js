import React, { useContext } from 'react'
import { ChangeProfile } from '../components/ChangeProfile'
import { AppContext } from '../App';



export const Profile = () => {
    const { setUserName, userName } = useContext(AppContext);

    return (
        <div><h1>{userName}'s Profile</h1>
            <ChangeProfile setUserName={setUserName} /></div>
    )
}
