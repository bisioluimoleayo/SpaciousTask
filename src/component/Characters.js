import { useState } from "react";
import { characters } from "../data";
import Sidebar from "./Sidebar";



const Characters = () => {
    const [Character, setCharacter] = useState(false)
    const rollit = () => {setCharacter(!Character)}

    return ( 
        <div className="d-flex row">
              {
                    characters.map(char =>  {
                        return<div className="card character my-4 mx-3 px-0" onClick={rollit}>
                        <img class="card-img-top char-img" src={char.image} alt="Card  cap" />
                        <div class="card-body">
                          <h5 class="card-title">{char.name}</h5>
                          <p>{char.friends}</p>
                        </div>
                      </div>
                    })
                }
                {
                  Character && <Sidebar />

                }
           </div>
     );
}
 
export default Characters;