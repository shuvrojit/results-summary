export const Result = () => {
  return (
    <section
      aria-labelledby="result"
      className="h-[23rem] md:h-[25rem] min-w-[100vw] md:min-w-[20rem] text-white rounded-b-3xl md:rounded-[2rem] text-center result my-auto"
    >
      <h2 id="result" className="font-bold py-4">
        Your Result
      </h2>
      <p className=" rounded-full w-[9.0rem] h-[9.0rem] p-8 mx-auto my-5 result-sc ">
        <span id="result-score" className="text-6xl">
          56
        </span>{' '}
        of 100
      </p>
      <h3 className="text-2xl my-2 font-bold">Great</h3>
      <p className="text-sm max-w-[16rem] md:max-w-[14rem] tracking-[0.03rem] mx-auto py-3 font-medium ">
        You have scored higher than 50% of the people who have taken this tests
      </p>
    </section>
  )
}
