import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import { fetchApi, HITS_PAGE } from './Api/FetchAPI';
import {ImageGallery} from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
// import { ClassNames } from '@emotion/react';



export class App extends Component {
  
  state = {
    items: [],
    page: 1,
    isLoading: false,
    query: '',
    total:0,
  }

  componentDidMount() {
    console.log("mount")
    // this.setState({isLoading:true})
     fetchApi({
      name: this.state.query,
      page:this.state.page,
    }).then((items,total) =>this.setState(items,total))
    // return {items,total}
    // this.setState({ isLoading: false })

  }

  handleFormSabmit = name => {
   
     this.setState({ query: name.trim()})
     console.log(this.state.query)
  };

  async componentDidUpdate(_, prevState) {
    console.log('update')
    const { page, query } = this.state;
    const { page: prevPage, query: prevQuery } = prevState;
    if (query === '') {
      return;
    } else if (prevPage !== page || prevQuery !== query) {
      this.setState({ isLoading: true });
      try {
        const respons = await fetchApi(query, page);
        const totalPage = Math.ceil(respons.total / HITS_PAGE)
      } catch (error) {
        console.log(error.message)
      } finally {
        this.setState({isLoading:false})
      }
    }



  }
    

  render() {
    return (
      <>
        <Searchbar onSabmitForm={this.handleFormSabmit} />
        { this.state.isLoading && <Loader/> }
        <ImageGallery  items={this.state.items} />
      </>
    );
  }
}
