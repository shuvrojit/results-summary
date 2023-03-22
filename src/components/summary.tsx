import { SingleTask } from './single-task'
import data from './data.json'

export const Summary = () => {
  return (
    <section aria-labelledby="summary" className="flex-column h-[25rem] md:w-[20rem] my-auto">
      <h2 id="summary" className="text-xm font-extrabold pl-7 pt-5">
        Summary
      </h2>
      <div className="tasks">
        {data.map((data, index) => {
          return <SingleTask key={index} data={data} />
        })}
      </div>

      <button className="w-[85vw] md:max-w-[15rem] block border my-7 mx-auto text-center py-3 rounded-full bg-dark-gray-blue text-white">
        Continue
      </button>
    </section>
  )
}
