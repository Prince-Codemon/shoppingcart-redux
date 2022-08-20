import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skelton = ({count}) => {
  
    
  return (
   
    Array(count)
      .fill(0)
    .map((e) => (
      <div className="card" key={e} style={{width:'22vw'}}>
        <div>
           <Skeleton circle style={{ width: "70px", height: "70px" }} />
        </div>
         <h1>{<Skeleton />}</h1>
         <h5>{<Skeleton />}</h5>
         <h2 style={{ padding: "10px 20px" }}>{<Skeleton />}</h2>
      </div>
    ))

  )
  
}

export default Skelton