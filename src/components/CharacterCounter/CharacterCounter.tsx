//Inside of the character counter file is what holds the text and shows TextInput.//
import { useState } from 'react'
import { TextInput } from '../../components/TextInput/TextInput'
import type { CharacterCounterProps } from '../../types/index'

export function CharacterCounter({minWords, maxWords, targetReadingTime}: CharacterCounterProps){
  const [text, setText] = useState('');
  return(
    <div>
       <TextInput onTextChange={setText}/>
       <p>{text}</p>
    </div>
  )
}