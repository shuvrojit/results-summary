type Data = {
  category: string
  score: number
  icon: string
}

type dataProps = {
  data: Data
}

export const SingleTask = (props: dataProps) => {
  return (
    <div className="single-task rounded-lg flex justify-between p-3 font-medium text-sm w-[85vw] md:max-w-[17rem] md:min-h-[3.2rem] mx-auto my-3 items-center">
      <div className="flex">
        <img src={props.data.icon} />
        <h2 className="pl-3">{props.data.category}</h2>
      </div>
      <h3 className="summary-score">
        <b>{props.data.score}</b>/ 100
      </h3>
    </div>
  )
}
