//Inside of the character counter file is what holds the text and shows TextInput.//
import { useState } from 'react'
import { TextInput } from '../../components/TextInput/TextInput'
import type { CharacterCounterProps } from '../../types/index'
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export function CharacterCounter({minWords= 25, maxWords= 100, targetReadingTime= 1}: CharacterCounterProps){
  const [text, setText] = useState('');
//measuring the texts input
  const characterCount = text.length
//creating word counter
  const wordCount = text === "" ? 0 : text.split(" ").length;
//creating reading timer
  const readingTime = (wordCount / 200)
//creating out progress bar
  const progress = (wordCount / maxWords)*100

  console.log(wordCount)
  return(
    <div>
       <TextInput onTextChange={setText}/>
       <StatsDisplay stats={{ characterCount: characterCount, wordCount: wordCount, readingTime: readingTime }} />
       <p>Min: {minWords} | Max: {maxWords} | Target: {targetReadingTime} min</p>


        {/* this is the box to the progress bar */}
      <div className="w-full h-3 bg-gray-200 rounded">
        
        {/* this is the blue bar inside of the progression bar. it fills up the more you type */}
        <div className="h-3 bg-blue-500 rounded" style ={{ width: `${progress}%`  }}>
          
       </div>

      </div>
         
       
    </div>
  )
}