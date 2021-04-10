import React from 'react';
import { Card } from 'react-bootstrap';

class ImageContainer extends React.Component {

    images = () => {
        return this.props.images.map((image, index) => {
            return (
                <a href={image.link}><img key={'result-' + index} className="image-container-image" alt="Result" src={image.thumbnail} /></a>
            )
        });
    }

    render() {
        return (
            <div>
                <Card className={'image-container' + (this.props.visible ? '' : ' transparent')}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.description}</Card.Subtitle>
                        <Card.Text>{this.images()}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}

export default ImageContainer;