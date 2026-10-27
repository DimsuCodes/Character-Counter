import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter"

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <h1 className="text-3xl font-bold text-center">Character Counter</h1>
            <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
        </div>
    )
}