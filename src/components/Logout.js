import React from "react";
import { ApolloConsumer } from "@apollo/client";
import { useHistory } from "react-router";

import Icon from "../component/Icon";

const onClick = (history, client) => {
	sessionStorage.setItem("token", "");
	history.push("/");
	client.resetStore();
};
const Logout = () => {
	let history = useHistory();

	return (
		<ApolloConsumer>
			{(client) => {
				return (
					<span style={{cursor:"pointer"}}>
						<Icon
							name="LogOut"
							onClick={() => onClick(history, client)}
							className="m-1"
						/>
					</span>
				);
			}}
		</ApolloConsumer>
	);
};

export default Logout;
