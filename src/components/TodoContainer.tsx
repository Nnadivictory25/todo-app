import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    theme: string;
}

let lightStyles = 'text-left w-95% sm:px-5 max-w-md mx-auto pt-10 md:pt-16 text-vDarkGreyBlue'
let darkStyles = 'text-left w-95% sm:px-5 max-w-md mx-auto pt-10 md:pt-16 text-white'

const TodoContainer = ({children, theme}: Props) => {
    return (
        <div className={theme == 'dark' ? darkStyles : lightStyles}>
            {children}
        </div>
    );
};

export default TodoContainer;