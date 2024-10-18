import React, {Component} from 'react';
import {Movies} from '../components/Movies'
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    state = {
        movies: [],
        loading:  true
    }

    componentDidMount() {
        console.log(process.env)
        fetch(`https://www.omdbapi.com/?s=matrix&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    handleSearch = (searchValuse, type='') => {
        if (!searchValuse) {
            return
        }
        this.setState({loadig: true})
        fetch(`https://www.omdbapi.com/?s=${searchValuse}&apikey=${API_KEY}${type !== '' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))


    }

    render() {
        const {movies, loading} = this.state
        return <main className='container content'>
            <Search search={this.handleSearch}/>
            {!loading ? (
                    <Movies movies={movies} /> 
            ) : (
                <Preloader />
            )}
            
        </main>
    }
}

export {Main}