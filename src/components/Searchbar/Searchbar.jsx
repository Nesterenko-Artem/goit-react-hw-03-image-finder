import { Component } from 'react';
import { FiSearch } from "react-icons/fi";
// import { } from './';
// import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    imageSearch:'',
  };

  hendleSubmit = event => {
    event.preventDefault();

    this.props.onSabmitForm(this.state.imageSearch);

    this.reset();
  };

  hendelInputChange = event => {
    this.setState({
      imageSearch: event.currentTarget.value.toLowerCase()
    });
  };

  reset = () => {
    this.setState({imageSearch:''});
  };

  render() {
    return (
      <>
        <header className="searchbar">
          <form className="searchForm" onSubmit={this.hendleSubmit}>
            <input
              className="searchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name='imageChange'
              value={this.state.imageSearch}
              onChange={this.hendelInputChange}
            />
            <button type="submit" className="searchForm-button">
              <span className="button-label"><FiSearch /></span>
            </button>
          </form>
        </header>
      </>
    );
  }
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
