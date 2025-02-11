
import { IoAmericanFootball, IoArrowBack, IoArrowForward, IoRadioButtonOff } from "react-icons/io5"
import { forwardRef } from "react"

const Switch = forwardRef((props, forwardedRef) => (
    <label className="cursor-pointer">
        <input type="checkbox" className="hidden" {...props} />
        <div className={`
            w-14 p-1 rounded-full
            ${props.checked ? "bg-blue-200": "bg-gray-200"}
        `}>
            <div className={`
                w-fit p-0.5 shadow-sm rounded-full
                transition-all duration-300 text-white
                ${
                    props.checked
                    ? "bg-blue-500 translate-x-6 rotate-0"
                    : "bg-gray-400 -rotate-180"
                }
            `}>
                {props.checked ? <IoRadioButtonOff size={20}/> : <IoRadioButtonOff size={20}/>}    
            </div>    
        </div>
    </label>
))

export default Switch