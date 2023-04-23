import { useEffect, useState } from "react";
import Profile from "../profile/profile";

const Artists = ({artists}) => {
    return ( 
        <div className="container mt-4" id="mainbox">
            <div className="row">
                <h3 className="text-light">Profiles of Artists</h3>
            </div>
            <div className="card-group">
                {artists.map((p)=><Profile userData={p}/>)}
              
            </div>
        </div>
    );
}
 
export default Artists;