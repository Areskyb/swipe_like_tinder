import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import Deck from "./src/Deck";
import { Component } from "react";
import Card from "./src/Card";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri:
      "https://i.pinimg.com/474x/41/42/e0/4142e035bb291b0801fa57cc6fde25bf.jpg",
  },
  {
    id: 2,
    text: "Card #2",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg",
  },
  {
    id: 3,
    text: "Card #3",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg",
  },
  {
    id: 4,
    text: "Card #4",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg",
  },
  {
    id: 5,
    text: "Card #5",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg",
  },
  {
    id: 6,
    text: "Card #6",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg",
  },
  {
    id: 7,
    text: "Card #7",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg",
  },
  {
    id: 8,
    text: "Card #8",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg",
  },
];

export default class App extends Component {
  renderCard(item) {
    return (
      <Card text={item.text} id={item.id} uri={item.uri} key={item.id}></Card>
    );
  }

  renderNoMoreCards() {
    return <Card text={"No More Cards !"} buttonText={"Nice!"}></Card>;
  }

  render() {
    return (
      <Deck
        data={DATA}
        renderCard={this.renderCard}
        renderNoMoreCards={this.renderNoMoreCards}
      ></Deck>
    );
  }
}
