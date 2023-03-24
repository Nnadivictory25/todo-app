import { FormEvent, useRef } from "react";

interface Props {
    onSubmit: (todo: string) => void;
}

const TodoInput = ({ onSubmit }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        inputRef.current && onSubmit(inputRef.current.value)
        formRef.current?.reset();
    }
    return (
        <form ref={formRef} className="bg-vDarkDesBlue rounded shadow-sm relative" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" className="w-full outline-none p-4 pl-16 bg-transparent" placeholder="Create a new todo..." maxLength={60}/>
            <div className="circle w-6 h-6 border rounded-full border-vDarkGreyBlueD absolute top-[26%] left-5"></div>
        </form>
    );
};

export default TodoInput;