//Inside of the character counter file is what holds the text and shows TextInput.//
import { useState } from 'react'
import { TextInput } from '../../components/TextInput/TextInput'
import type { CharacterCounterProps } from '../../types/index'

export function CharacterCounter({minWords, maxWords, targetReadingTime}: CharacterCounterProps){
  const [text, setText] = useState('');

  const characterCount = text.length

  const wordCount = text === "" ? 0 : text.split(" ").length;

  const readingTime = (wordCount / 200)

  console.log(wordCount)
  return(
    <div>
       <TextInput onTextChange={setText}/>
       <p>{text}</p>
       <p>{characterCount}</p>
       <p>{wordCount}</p>
       <p>{readingTime}</p>
    </div>
  )
}