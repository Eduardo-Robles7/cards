import React, { Component } from "react";
import { Card, Button, Image } from "semantic-ui-react";
import "./picture.css";

class Picture extends Component {
  render() {
    return (
      <div className="picture">
        <Card raised>
          <Image src="https://source.unsplash.com/random" />
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>{this.props.location}</Card.Meta>
            <Card.Description>{this.props.desc}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              onClick={() => this.props.removePicture(this.props.id)}
              icon="trash alternate"
            />
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Picture;
