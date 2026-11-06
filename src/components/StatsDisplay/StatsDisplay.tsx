//Stats display is where the numbers will show.//
import type { StatsDisplayProps } from  '../../types/index'

export function StatsDisplay({stats, showReadingTime= true}: StatsDisplayProps){

    
    return(
        <div>
            <p>Characters:{stats.characterCount}</p>
            <p>Word Count:{stats.wordCount}</p>
            {showReadingTime && <p>Reading Time:{stats.readingTime}</p>}
        </div>
    )
}

