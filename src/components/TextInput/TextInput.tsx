//The text input file is where we will  create the box that the users type inside of.*//
import type { TextInputProps } from  '../../types/index'

//destructing props directly in the fdunctions parameters
export function TextInput ({onTextChange, placeholder = "Start typing here...", initialValue=''}:TextInputProps) {
    return(
        <div>                                 {/* onChange = when change happens -- (e) = take the event, onTextChange(e.target.value) = send the text to the parent*/}
            <textarea 
            className="w-full p-4 border" 
            defaultValue={initialValue} 
            placeholder={placeholder} 
            onChange={(e) => onTextChange(e.target.value)} 
            aria-label="Text to analyze">
            </textarea>
        </div>
    )
}