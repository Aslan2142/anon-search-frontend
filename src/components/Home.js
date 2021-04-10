import React from 'react';
import Axios from 'axios';
import { Container } from 'react-bootstrap';

import SearchBox from './SearchBox';
import Result from './Result';
import ImageContainer from './ImageContainer';

import Loading from '../loading.svg';

class Home extends React.Component {

    state = {
        searching: false,
        searchQuery: '',
        visible: true,
        imageContainer: { title: '', description: '', images: [] },
        results: []
    }

    search = query => {
        this.setState({
            searching: query !== '',
            searchQuery: query,
            visible: false
        });

        setTimeout(() => {
            this.setState({
                visible: true
            });
        }, 500);

        if (query === '') return;

        Axios.get('https://aslan2142.space/search/api/websearch?q=' + query).then(response => {
            if (response.data.error !== undefined) return;
            
            this.setState({
                searching: false,
                visible: true,
                imageContainer: response.data.imageContainer,
                results: response.data.results
            });
        });
    }

    loading = () => {
        return <img className="loading" alt="Loading..." src={Loading} />;
    }

    imageContainer = () => {
        if (this.state.imageContainer.title !== '') {
            return <ImageContainer visible={this.state.visible} title={this.state.imageContainer.title} description={this.state.imageContainer.description} images={this.state.imageContainer.images} />;
        } else {
            return;
        }
    }

    results = () => {
        return this.state.results.map((result, index) => {
            return ( <Result key={'result-' + index} visible={this.state.visible} title={result.title} link={result.link} description={result.description} /> );
        });
    }

    render() {
        return (
            <div>
                {this.state.searching ? this.loading() : null}
                <Container fluid="lg" className="mt-5">
                    <SearchBox home={this.state.searchQuery === ''} onSearch={this.search} />
                    {(this.state.searchQuery === '' || this.state.searching) && this.state.visible ? null : this.imageContainer()}
                    {(this.state.searchQuery === '' || this.state.searching) && this.state.visible ? null : this.results()}
                    <div className="mb-5"></div>
                </Container>
            </div>
        )
    }

}

export default Home;