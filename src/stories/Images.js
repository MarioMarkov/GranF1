import axios from "axios";
import { useState, useEffect } from "react";

function Images() {
    const [data, setData] = useState([]);
    
  useEffect(() => {
    axios
      .get("/api/img_data")
        .then((res) => { 
            console.log(res.data)
            setData(res.data)
        })
      .catch((err) => console.log(err, "it has an error"));
  },[]);
  
  return (
    <div >
          <h1>Image uploading react</h1>
          <ul>
          {data.map((singleData) => {
       
            var base64 = btoa(
                new Uint8Array(singleData.img.data.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                
              return <li key={singleData._id}>
                    <img  src={`data:image/png;base64,${base64}`} width="300" />
              </li>
              
            
     })}
          </ul>
     
    </div>
  );
}

export default Images;