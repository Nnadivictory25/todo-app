import { useEffect } from "react";
import xIcon from '../assets/icon-cross.svg'

export interface Todo {
	id: number;
	todo: string;
	isDone: boolean;
}

interface Props {
    todos?: Todo[];
    theme: string;
}

const TodoList = ({ todos, theme }: Props) => {

    const themeColor = theme == 'dark' ? 'vDarkDesBlue' : 'lightGray'

    useEffect(() => {
        const root = document.documentElement;
        root?.style.setProperty(
          "--chkBgColor",
          theme == 'dark' ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)"
        );
      }, [theme]);

    return (
		<div className={`rounded shadow-sm relative transition duration-150 mt-6 bg-${themeColor}`}>
			<label className={`container w-full outline-none p-4 pt-5 pl-16 bg-transparent border-b-[1px] border-b-darkGreyBlueD`}>
				Jug around the park
				<input type='checkbox' name='checkTodo'/>
                <span className='checkmark transition duration-150'></span>
                <img className="absolute right-5 top-[36%]" src={xIcon} alt="remove todo" onClick={() => console.log('clicked')}/>
			</label>
		</div>
	);
};

export default TodoList;
