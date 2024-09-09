import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

const Button = ({ children , className ,...rest} : Iprops ) =>{
    return(
        <>
            <button className= {`${className} w-full  text-white rounded-md p-3` } {...rest}>{children}</button>
        </>
    )
}
export default Button;