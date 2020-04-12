import React, { Component } from "react";
import styled from "styled-components";
import { Animated, Button } from "react-native";

export default class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);

    Animated.spring(this.position, {
      toValue: { x: 200, y: 300 },
    }).start();
  }
  render() {
    return (
      <>
        <Animated.View style={this.position.getLayout()}>
          <AnimatedObject />
        </Animated.View>
      </>
    );
  }
}

const AnimatedObject = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border-width: 30px;
  background: #2d334a;
`;
