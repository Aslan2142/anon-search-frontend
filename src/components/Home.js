import React from 'react';
import Axios from 'axios';
import { Container } from 'react-bootstrap';

import SearchBox from './SearchBox';
import Result from './Result';

class Home extends React.Component {

    state = {
        searchQuery: '',
        results: []
    }

    search = query => {
        this.setState({
            searchQuery: query
        });

        Axios.get('http://localhost:2142/websearch?q=' + query).then(response => {
            if (response.data.error !== undefined) return;
            
            this.setState({
                results: response.data.results
            });
        });
    }

    results = () => {
        return this.state.results.map((result, index) => {
            return ( <Result key={'result-' + index} title={result.title} link={result.link} description={result.description} /> );
        });
    }

    render() {
        return (
            <div>
                <Container fluid="lg" className="mt-5">
                    <SearchBox home={this.state.searchQuery === ''} onSearch={this.search} />
                    {this.state.searchQuery === '' ? null : this.results()}
                </Container>
            </div>
        )
    }

}

export default Home;