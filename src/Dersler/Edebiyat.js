import React, { Component } from "react";
import Ed from "../components/Ders/Edebiyat";

class Edebiyat extends Component {
  render() {
    return (
      <div>
        <div className="N_Tittle">
          <span>Edebiyat</span>
        </div>
        <Ed />
      </div>
    );
  }
}

export default Edebiyat;
