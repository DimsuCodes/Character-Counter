import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter"

export default function App() {
    return (
    <>
    <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
    </>
    
    )
}