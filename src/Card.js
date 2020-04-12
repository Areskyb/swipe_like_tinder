import React from "react";
import styled from "styled-components";

let uri;
export default function Card({ text, uri, id, buttonText = "More info!" }) {
  uri = uri;
  return (
    <Background>
      <Image source={{ uri: uri }}></Image>
      <Description>{text}</Description>
      <Button>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </Background>
  );
}

const Background = styled.View`
position: absolute
  width: 344px;
  height: 512px;
  left: 15px;


  background: #fbe3b9;
  border-radius: 20px;
  margin-bottom: 10px;

`;

const Image = styled.Image`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 29.69%;

  /* Pastel */

  background: #fab696;
  border-radius: 20px;
`;

const Description = styled.Text`
  position: absolute;
  width: 177px;
  height: 28px;
  left: 84px;
  top: 381px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  /* Azul oscuro */
  color: #2d334a;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  width: 247px;
  height: 57px;
  left: 55px;
  top: 431px;
  /* Verde farmacia */

  background: #0c9463;
  /* Button shadow 1 */

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  border-radius: 28.5px;
`;

const ButtonText = styled.Text`
  position: absolute;
  left: 17.23%;
  right: 16.78%;
  top: 26.67%;
  bottom: 24.21%;

  /* Heading 4 (24) */
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #2d334a;
`;
