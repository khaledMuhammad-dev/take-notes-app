import { useState } from "react";


const useToggle = (initState: boolean = false): [boolean, (val?: boolean) => void] => {
    const [toggle, setToggle] = useState(initState);

    const handleToggle = (val = false) => {
        if (val === true || val === false) {
            setToggle(val);
            return;
        }

        setToggle(prev => !prev);
    }

    return [toggle, handleToggle];
}


export default useToggle;