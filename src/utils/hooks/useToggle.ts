import { useState } from "react";


const useToggle = (initState: boolean = false) => {
    const [toggle, setToggle] = useState(initState);

    const handleToggle = () => {
        setToggle(prev => !prev);
    }

    return [toggle, handleToggle] as [boolean, ()=>void]
}


export default useToggle;