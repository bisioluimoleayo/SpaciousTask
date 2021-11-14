// import { useState } from "react";
import { planets } from "../data";
// import PlanetDetails from "./PlanetDetails";
// import planet11 from "../images/planets/planet-9.svg"


const Planets = () => {
// const [details, setDetails] = useState()
// const [show, setShow] = useState(false)

// const handleClick = (e) => {
//   setShow(true)
//     console.log(e.target);
// }

    return ( 
        <div className="d-flex row">
            <div className="d-flex row">
                {
                    planets.map(planet =>  {
                        return <div style={{ width: '16rem' }} className="my-4 mx-3 p-3 planet">
                        <img variant="top" src={planet.image} alt="alpha" width="120px" height="120px" className="d-flex m-auto"/>
                        <div>
                          <div className="fw-bold">{planet.name}</div>
                          <div className="opacity-50">
                            {planet.prop}
                          </div>
                        </div>
                      </div>
                    })
                }
            </div>

{/* <div className="col-3 border">
<PlanetDetails/>
</div> */}
</div>
     );
}
 
export default Planets;