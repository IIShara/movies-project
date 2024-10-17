import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      type: "",
    };
  }

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.search(this.state.search);
    }
  };

  handleChange = (event) => {
    this.setState(
        () => ({ [event.target.name]: event.target.value }), 
        () => {this.props.search(this.state.search, this.state.type)});
  };

  render() {
    const { type, search } = this.state;
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              className="validate"
              placeholder="search"
              type="search"
              value={search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn search-btn"
              onClick={() => this.props.search(search, type)}
            >
              Search
            </button>
            {/* <br/>
            <input type="radio" name="type" value="movie" onChange={this.handleChange} checked={type === "movie"} /> Movie
            <input type="radio" name="type" value="series" onChange={this.handleChange} checked={type === "series"} /> Series
            <input type="radio" name="type" value="" onChange={this.handleChange} checked={type === ""} /> All */}
            <div>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value=""
                  onChange={this.handleChange}
                  checked={type === ""}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value="movie"
                  onChange={this.handleChange}
                  checked={type === "movie"}
                />
                <span>Movie</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value="series"
                  onChange={this.handleChange}
                  checked={type === "series"}
                />
                <span>Series</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
