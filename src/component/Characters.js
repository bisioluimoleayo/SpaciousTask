// import { useState } from "react";
import { characters } from "../data";



const Characters = () => {
    // const [character, setCharacter] = useState()

    return ( 
        <div className="d-flex row">
              {
                    characters.map(char =>  {
                        return<div className="card character my-4 mx-3 px-0">
                        <img class="card-img-top char-img" src={char.image} alt="Card  cap" width="270px" height="136px"/>
                        <div class="card-body">
                          <h5 class="card-title">{char.name}</h5>
                          <p>{char.friends}</p>
                        </div>
                      </div>
                    })
                }
           </div>
     );
}
 
export default Characters;