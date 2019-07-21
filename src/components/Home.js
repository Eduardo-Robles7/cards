import React, { Component } from "react";
import Head from "./Head";
import Picture from "./Picture";
import { Card } from "semantic-ui-react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [
        {
          id: 1,
          name: "Beach Trip",
          location: "Oregon",
          desc: "My summer trip"
        },
        {
          id: 2,
          name: "Birthday Party",
          location: "Pizza Hut",
          desc: "My 5th birthday"
        },
        {
          id: 3,
          name: "Cuba 2019",
          location: "Cuba",
          desc: "Yo con mi familia"
        },
        {
          id: 4,
          name: "Graduation",
          location: "PSU",
          desc: "Graduating with my BS"
        },
        {
          id: 5,
          name: "Night at the Rec",
          location: "PSU Rec",
          desc: "Game night"
        },
        {
          id: 6,
          name: "Night at the Rec",
          location: "PSU Rec",
          desc: "Game night"
        },
        {
          id: 7,
          name: "Night at the Rec",
          location: "PSU Rec",
          desc: "Game night"
        }
      ]
    };
  }

  removePicture = id => {
    this.setState({
      pictures: this.state.pictures.filter(picture => {
        return picture.id !== id;
      })
    });
  };
  render() {
    return (
      <div>
        <Head />
        <Card.Group itemsPerRow={3}>
          {this.state.pictures &&
            this.state.pictures.map(picture => (
              <Picture
                id={picture.id}
                name={picture.name}
                location={picture.location}
                desc={picture.desc}
                removePicture={this.removePicture}
              />
            ))}
        </Card.Group>
      </div>
    );
  }
}

export default Home;
