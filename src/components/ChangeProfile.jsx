import React, { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
	const { setUserName, setGetUsername } = useContext(AppContext);

	const [newUsername, setNewUsername] = useState("");

	function storeUsername() {
		localStorage.setItem("username", newUsername);
	}

	return (
		<div>
			{" "}
			<input
				onChange={(event) => {
					setNewUsername(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					setUserName(newUsername);
					storeUsername(setGetUsername);
				}}
			>
				Update My Username
			</button>
		</div>
	);
};
