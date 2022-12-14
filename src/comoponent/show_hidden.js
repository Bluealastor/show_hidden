import React, {useState, useEffect} from "react"


function Show_hidden() {
    const [show, setShow] = useState(false)
    const element = "im a NINJA"
    return (
      <div className="card shadow mt-5 p-5">
      <button className="button w-50 col-6 offset-3 shadowS"
      onClick={() => setShow(!show)}
      >
      {show ? "hidden" : "show"}
      </button>
      {
        show && element
      }
       
      </div>
    );
  }
  
  export default Show_hidden;