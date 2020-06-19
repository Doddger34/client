import React, { Component } from "react";
import Mat from "../components/Ders/Matematik";


class Matematik extends Component {
  render() {
    return (
      <div>
        <div className="N_Tittle">
          <span>Matematik</span>
        </div>
        <Mat />
      </div>
    );
  }
}

export default Matematik;
