import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class Home extends React.Component {

    state = {
        text: ''
    }

    search = () => {
        this.props.onSearch(this.state.text)
    }

    render() {
        return (
            <div>
                <InputGroup className={this.props.home ? 'search search-home' : 'search'}>
                    <FormControl className="input" value={this.state.text}
                        onChange={e => this.setState({text: e.target.value})}
                        onKeyDown={e => {if (e.key === 'Enter') this.search()}}
                    />
                    <Button className="button-alt" onClick={e => this.search()}>Search</Button>
                </InputGroup>
            </div>
        )
    }

}

export default Home;