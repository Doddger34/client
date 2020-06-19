import React, { Component } from "react";
import "../Style/Search.css";
import proptTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: "",
    };
  }

  Chance = (e) => {
    this.setState({
      Search: e.target.value,
    });
  };

  render() {
    const data = this.props;
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    const { Search } = this.state;
    return (
      <div>
        <form>
          <div className="d_Search form-group">
            <div>
              <input
                onChange={this.Chance}
                value={Search}
                className="d_Search-input form-control"
                id="exampleFormControlInput1"
                placeholder={this.props.plc}
                maxLength="20"
                minLength="1"
              />
            </div>
          </div>
        </form>
        
      </div>
    );
  }
}
Search.proptypes = {
  plc: proptTypes.string.isRequired,
  type: proptTypes.string,
};
Search.defaultProps = {
  plc: "Arama yapın",
};

export default Search;
