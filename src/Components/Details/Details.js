import React, { useEffect } from "react";
import { perfumes } from "../../data.js";
import { useParams } from "react-router-dom";

const Details = () =>{

    const {id} = useParams();
    const perfume = perfumes.find(perf => perf.id === id);    
    useEffect(()=>{
        console.log(perfume);
    },[perfume])


    const fstate = () =>{
        return perfume.state === "In Stock"? "inf" : "outf";
    }
    return(
        <section className="details-section">
                <div className="title-details">
                    <h1>Details <span>About</span></h1>
                </div>
                <div className="prf-info">
                    <div className="prf-img">
                    <img src={perfume.pictureUrl} alt={perfume.name}/>
                    </div>
                    <div className="fiche">
                        <h2 className="ftitle">{perfume.name}</h2>
                        <h3 className="fbrand">{perfume.brand}</h3>
                        <p className="details-examplepr">Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Sed do eiusmod tempor 
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.</p>

                        <h4 className={fstate()}>{perfume.state}</h4>
                        <h4 className="fprice">Price: {perfume.price} £</h4>
                        <p className="fcateg">{perfume.category}</p>
                    </div>
                </div>
        </section>
    );
}

export default Details;