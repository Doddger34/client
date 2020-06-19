import React from "react";
import { ApolloConsumer } from "@apollo/client";
import { useHistory } from "react-router";

const onClick = (history, client) => {
  localStorage.setItem("token", "");
  history.push("/");
  client.resetStore();
};
const Logout = () => {
  let history = useHistory();

  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <button
            className="btn btn-outline-secondary ml-2 "
            onClick={() => onClick(history, client)}
          >
            <span>Çıkış</span>
          </button>
        );
      }}
    </ApolloConsumer>
  );
};

export default Logout;
