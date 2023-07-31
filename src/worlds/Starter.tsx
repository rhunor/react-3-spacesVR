/* eslint-disable react/no-unknown-property */
import { Spinning, Floating, StandardReality,Model, Interactable } from "spacesvr";
import TransparentFloor from "ideas/TransparentFloor";
import CloudySky from "ideas/CloudySky";
import {Sky,Cloud} from "@react-three/drei";

export default function Starter() {
  return (
    <StandardReality
    playerProps={{pos:[0,0,1]}}
    >
      <ambientLight intensity={4} />
      <Model scale = {0.007} position-y ={0.01} rotation-x={-Math.PI/2} src="./vrShowcaseGlassFixed.glb"/>
      <Spinning ySpeed={7}>
      <Interactable onClick={()=>window.open("https://jrhunor.com/")}>
      <Model scale = {0.01} position ={[0.05,0.7,-0.01]}  src="./product.glb"/>
      </Interactable>
      </Spinning>
      <TransparentFloor opacity={0.7} />
      <Sky sunPosition={[0, 1, 0]}/>
      <Cloud position-y={15}/>
    </StandardReality>

  );
}
