import { useState, useEffect } from "react";

function Header() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString()),1000)
    },[time])
    
    

    return(

        
       
        <div className="header">


            <h1> JS 로 TODO-List 를 옮겨보자 {new Date().toLocaleDateString()} {time}</h1>

        </div>

    );
}

export default Header;
