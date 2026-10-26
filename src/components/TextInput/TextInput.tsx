import type { TextInputProps } from "../../types"
export default function TextInput(props: TextInputProps) {
    let {
    onTextChange,
    placeholder,
    initialValue} = props

    return(
        <div>
            <h1>Text Input</h1>
            <textarea
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
        </div>
    )
}