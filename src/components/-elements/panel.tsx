// React | Three Imports
import { useFrame, extend } from '@react-three/fiber'
import { useState} from "react";
import * as THREE from 'three'
import { Html} from '@react-three/drei'
extend({ Html, useFrame, THREE })


//
//
interface PanelProps {
  text: { name: string; 
    link: string; 
    description: string; 
    scene: string;
    panelPos: number[];
    position: number[];};
  next: () => any;
  back: () => any;
}

export function Panel({text, next, back }: PanelProps) { 
  const Next = next
  const Back = back
  const main = text
  const [active, setActive] = useState(true)
  function Collapse() {
      setActive(!active)
  }
  return (
    <div id="panelContainer">
        <div id="panel"
        className="rounded">
          <h5 id="heading" className="d-flex m-0">
        
            <button
            id="btnCollapse2"
            className="d-flex bg-transparent border-none active justify-content-between align-items-center"
            type="button"
            aria-expanded="true"
            aria-controls="collapseGroup"
            onClick={() => Collapse()}>
                <p className="m-0 px-2">{main.name}</p>
                <img id="more" alt="Expand and Read more" src="/arrow-forward.png" />
            </button>
            </h5>

        <div
            id="collapseGroup"
            className="px-4"
            aria-labelledby="heading">
                    <p className={`${active ? "active" : "inactive" } m-0`}>{main.description}</p>

                  <div className="d-flex justify-content-center align-items-center my-2 mx-1 mb-5">
                      <a type="button" href="#" id="back" className="rounded-full m-2" onClick={() => Back()}> 
                          <img id="backimg" alt="Go to previous topic" src="/arrow-forward.png" />
                        </a>
                        <a type="button" href={main.link} id="learnMore" className="pnl-btns rounded-pill px-3 py-1 m-2">
                            <p className="m-0">learn more</p>
                        </a>
                        <a type="button" href="#" id="next" className="rounded-pill pnl-btns px-3 py-1 m-2" onClick={() => Next()}> 
                            <p className="m-0">next</p>
                        </a>

                  </div>

        </div>
        </div>

    </div> 

)
}