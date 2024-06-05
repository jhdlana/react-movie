import { useEffect } from "react";

export default function useOnClickOutsite(out, handler) {
    useEffect(() => {
        const listener = (event) => { 
            if(!out.current || out.current.contains(event.target)){
                return;
            } 
            handler();
        }
        
        document.addEventListener('mousedown', listener)
        
        return () => {
            document.removeEventListener('mousedown', listener)
        }
    }, [out, handler])
}