//Stats display is where the numbers will show.//
import type { StatsDisplayProps } from  '../../types/index'

export function StatsDisplay({stats, showReadingTime}: StatsDisplayProps){
    return(
        <div>
            <p>{stats.characterCount}</p>
            <p>{stats.wordCount}</p>
            <p>{stats.readingTime}</p>
        </div>
    )
}