import React, { Component } from "react";
import Fiz from "../components/Ders/Fizik";

class Edebiyat extends Component {
  render() {
    return (
      <div>
        <div className="N_Tittle">
          <span>Fizik</span>
        </div>
        <Fiz />
      </div>
    );
  }
}

export default Edebiyat;
