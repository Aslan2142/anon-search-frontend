import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import urlDecode from 'urldecode';

class SearchBox extends React.Component {

    state = {
        text: ''
    }
    
    componentDidMount = () => {
        if (this.props.query !== this.state.text) {
            let text = this.props.query.slice(this.props.query.indexOf('=') + 1);
            text = urlDecode(text);
            text = text.replace('+', ' ');
            this.setState({
                text: text
            });
        }
    }

    search = () => {
        this.props.onSearch(this.state.text, true)
    }

    render() {
        return (
            <div>
                <InputGroup className={this.props.home ? 'search search-home' : 'search'}>
                    <FormControl className="input input-dark" value={this.state.text}
                        onChange={e => this.setState({text: e.target.value})}
                        onKeyDown={e => {if (e.key === 'Enter') this.search()}}
                    />
                    <Button className="button-alt" onClick={e => this.search()}>Search</Button>
                </InputGroup>
            </div>
        )
    }

}

export default SearchBox;