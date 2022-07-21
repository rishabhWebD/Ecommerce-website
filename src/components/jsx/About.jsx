import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  height: 100vh;
`;

const Pictures = styled.div`
  margin-top: 70px;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexDivL = styled.div`
  height: 200px;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
  &:nth-child(1)::after {
    margin-right: 20px;
    height: 100%;
    content: "Rishabh";
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:nth-child(3)::after {
    margin-right: 20px;
    height: 100%;
    content: "Vibhore";
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const FlexDivR = styled.div`
  height: 200px;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
  &:nth-child(2)::before {
    height: 100%;
    content: "Tanay";
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  background-repeat: no-repeat;
  margin: 10px;
  box-sizing: border-box;
  height: 200px;
  width: 200px;
  background: url("//unsplash.it/200/200");
  border-radius: 50%;
  flex-direction: row-reverse;
`;
const Right = styled.div`
  background-repeat: no-repeat;
  margin: 10px;
  box-sizing: border-box;
  height: 200px;
  width: 200px;
  background: url("//unsplash.it/200/200");
  border-radius: 50%;
  flex-direction: row-reverse;
`;
const Detail = styled.div`
  max-width: 50%;
  margin: 50px 50px;
  padding: 5px;
`;

const Title = styled.h1`
  font-size: 6em;
  /* text-align: center; */
  color: palevioletred;
`;

function About() {
  return (
    <MainDiv>
      <Pictures>
        <FlexDivL>
          <Left />
        </FlexDivL>
        <FlexDivR>
          <Right />
        </FlexDivR>
        <FlexDivL>
          <Left />
        </FlexDivL>
      </Pictures>
      <Detail>
        <Title>About</Title>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          eligendi, odit ullam dolorem modi obcaecati voluptates quis, officia
          corrupti quia ipsum asperiores. Cum aperiam, repellat officia quod
          laborum, voluptatem praesentium ea quibusdam quasi possimus dolorum
          perferendis adipisci molestias omnis a eum sequi ipsum dolor unde
          porro sapiente natus. Rem error quaerat, eos voluptas laboriosam quo
          delectus ad, deserunt id, vel porro debitis dolore eligendi suscipit
          ipsum? Totam rerum mollitia, non autem unde ipsum ab quo accusantium
          harum architecto magni maiores? Quisquam reprehenderit molestias
          atque, esse earum explicabo vel cum dolorem vitae possimus! Deserunt,
          consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error dolores eius alias id doloribus sunt debitis ipsa quaerat! Culpa
          aspernatur, nemo illum sed ipsa eius atque hic veritatis praesentium
          laborum molestiae numquam ab! Ipsa non rem repudiandae reprehenderit
          libero inventore facilis est natus cum id quae optio suscipit enim at
          assumenda accusantium iure blanditiis molestias incidunt, numquam
          veritatis debitis provident? Dolor ducimus quis obcaecati aspernatur
          quas vero aliquid libero nobis exercitationem ut nisi eveniet sed
          consequatur, amet ipsam illum quia velit sequi minus modi aperiam
          tempora? Placeat aperiam ipsa totam! Dicta, ea distinctio officia
          laboriosam fugit dolores maiores totam laudantium!
        </p>
      </Detail>
    </MainDiv>
  );
}

export default About;
