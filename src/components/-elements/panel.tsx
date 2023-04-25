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
    position: number[];};
  changePage: () => any;
}

export function Panel({text, changePage }: PanelProps) { 
  let ChangePage = changePage
  const main = text
  const [active, setActive] = useState(true)
  function Collapse() {
      setActive(!active)
  }
  return (

<div id="panelContainer">
    <div id="panel"
    className="rounded-t-lg">
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

                <a type="button" href={main.link} id="learnMore" className="rounded-full px-3 py-1 m-2">
                    <p className="m-0">learn more</p>
                </a>
                <a type="button" href="#" id="next" className="rounded-full px-3 py-1 m-2" onClick={() => ChangePage()}> 
                    <p className="m-0">next</p>
                </a>
    </div>
    </div>

</div>
)
}