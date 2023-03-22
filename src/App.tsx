import './App.css'
import { Result } from './components/result'
import { Summary } from './components/summary'

function App(): JSX.Element {
  return (
    <div className="flex-column md:flex md:w-[40rem] md:mx-auto md:my-[7rem] md:h-[25rem] md:shadow-lg md:shadow-grey-500/50 rounded-[2rem]">
      <Result />
      <Summary />
    </div>
  )
}

export default App
