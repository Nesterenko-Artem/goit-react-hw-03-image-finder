import { Component } from 'react';
import { } from './';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    
  };

//   hendleSubmit = event => {
//     event.preventDefault();

//     this.props.onSabmitForm(this.state);

//     this.reset();
//   };

//   hendelInputChange = event => {
//     this.setState({
//       [event.currentTarget.name]: event.currentTarget.value,
//     });
//   };

//   reset = () => {
//     this.setState({});
//   };

  render() {
    return (
      <>
        <header class="searchbar">
          <form class="form">
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
