import React from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import SearchBox from './SearchBox';
import Result from './Result';
import QuickResult from './QuickResult';

import Loading from '../resources/loading.svg';

class Home extends React.Component {

    state = {
        searching: false,
        searchQuery: '',
        visible: true,
        animated: true,
        quickResult: { title: '', description: '', images: [] },
        results: []
    }

    componentDidMount = () => {
        if (this.props.query !== '') {
            this.search(this.props.query.slice(this.props.query.indexOf('=') + 1), this.props.query.startsWith('?aq='));
        }
    }

    search = (query, animated) => {
        this.setState({
            animated
        });

        this.props.history.push({
            search: '?q=' + query
        });

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
                quickResult: response.data.quickResult,
                results: response.data.results
            });
        });
    }

    loading = () => {
        return <img className="loading" alt="Loading..." src={Loading} />;
    }

    quickResult = () => {
        if (this.state.quickResult.title !== '') {
            return <QuickResult visible={this.state.visible} animated={this.state.animated}
                        title={this.state.quickResult.title} description={this.state.quickResult.description} images={this.state.quickResult.images} />;
        } else {
            return;
        }
    }

    results = () => {
        return this.state.results.map((result, index) => {
            return ( <Result key={'result-' + index} visible={this.state.visible} animated={this.state.animated}
                        title={result.title} link={result.link} description={result.description} /> );
        });
    }

    render() {
        return (
            <div>
                {this.state.searching ? this.loading() : null}
                <Container fluid="lg" className="mt-5">
                    <SearchBox home={this.state.searchQuery === ''} onSearch={this.search} query={this.props.query} />
                    {(this.state.searchQuery === '' || this.state.searching) && this.state.visible ? null : this.quickResult()}
                    {(this.state.searchQuery === '' || this.state.searching) && this.state.visible ? null : this.results()}
                    <div className="mb-5"></div>
                </Container>
            </div>
        )
    }

}

export default withRouter(Home);