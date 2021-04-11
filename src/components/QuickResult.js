import React from 'react';
import { Card } from 'react-bootstrap';

class QuickResult extends React.Component {

    images = () => {
        return this.props.images.map((image, index) => {
            return (
                <a key={'quick-result-image-' + index} href={image.link}><img className="quick-result-image" alt="Result" src={image.thumbnail} /></a>
            )
        });
    }

    render() {
        return (
            <div>
                <Card key='quick-result' className={'quick-result' + (this.props.animated ? '' : ' no-animation') + (this.props.visible ? '' : ' transparent')}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="text-muted">{this.props.description}</Card.Subtitle>
                        <Card.Text>{this.images()}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}

export default QuickResult;