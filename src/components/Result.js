import React from 'react';
import { Card } from 'react-bootstrap';

class Result extends React.Component {

    state = {
        text: ''
    }

    render() {
        return (
            <div>
                <a className="no-dec" href={this.props.link}>
                    <Card className={'result' + (this.props.animated ? '' : ' no-animation') + (this.props.visible ? '' : ' transparent')}>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.props.link}</Card.Subtitle>
                            <Card.Text className="regular-font">{this.props.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </div>
        )
    }

}

export default Result;