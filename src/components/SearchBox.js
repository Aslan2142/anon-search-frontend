import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class Home extends React.Component {

    state = {
        text: ''
    }

    render() {
        return (
            <div>
                <InputGroup className={this.props.home ? 'search-home' : 'search'}>
                    <FormControl value={this.state.text}
                        onChange={e => this.setState({text: e.target.value})}
                    />
                    <Button variant="secondary" onClick={e => this.props.onSearch(this.state.text)}>Search</Button>
                </InputGroup>
            </div>
        )
    }

}

export default Home;