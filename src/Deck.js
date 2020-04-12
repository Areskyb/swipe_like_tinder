import React, { Component } from "react";
import styled from "styled-components";
import {
  Animated,
  ScrollView,
  View,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
// at least 1 quarter (0.25) to be liked o disliked
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DIRECTION = 250;
export default class Deck extends Component {
  static defaultProps = {
    onSwipeLeft() {},
    onSwipeRight() {},
  };

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = new PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderEnd: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipeRight();
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipeLeft();
        } else {
          this.resetPosition();
        }
      },
    });

    this.state = { panResponder, position, index: 0 };
  }

  UNSAFE_componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  forceSwipeRight() {
    Animated.timing(this.state.position, {
      toValue: { x: SCREEN_WIDTH * 3, y: 0 },
      duration: SWIPE_OUT_DIRECTION,
    }).start(() => {
      this.onSwipeComplete("right");
    });
  }

  forceSwipeLeft() {
    Animated.timing(this.state.position, {
      toValue: { x: -SCREEN_WIDTH * 3, y: 0 },
      duration: SWIPE_OUT_DIRECTION,
    }).start(() => {
      this.onSwipeComplete("left");
    });
  }
  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
    }).start();
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];

    direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });
  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-90deg", "0deg", "90deg"],
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate: rotate }],
    };
  }

  renderCards() {
    if (this.state.index >= this.props.data.length) {
      return this.setState({ index: 0 });
    }

    return (
      this.props.data
        .map((item, i) => {
          if (i < this.state.index) {
            return null;
          }
          if (i === this.state.index) {
            return (
              <Animated.View key={item.id} style={this.getCardStyle()}>
                {this.props.renderCard(item)}
              </Animated.View>
            );
          }
          return (
            <Animated.View
              key={item.id}
              style={{ top: 10 * (i - this.state.index) }}
            >
              {this.props.renderCard(item, i)}
            </Animated.View>
          );
        })
        // IMPORTATNT reverse function hahaha
        .reverse()
    );
  }

  render() {
    return (
      <View
        style={{ marginTop: "10%" }}
        {...this.state.panResponder.panHandlers}
      >
        {this.renderCards()}
      </View>
    );
  }
}
