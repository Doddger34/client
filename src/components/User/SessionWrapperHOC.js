import React from "react";
import { useQuery } from "@apollo/client"

import { GET_USER } from "../../queries/index";

const sessionWrapperHOC = (Component) => (props) => {
  const { loading, data, refetch } = useQuery(GET_USER);
  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center", margin:"0 auto" }}>Yükleniyor...</div>
      ) : (
        <Component {...props} session={data} refetch={refetch} />
      )}
    </div>
  );
};

export default sessionWrapperHOC;
