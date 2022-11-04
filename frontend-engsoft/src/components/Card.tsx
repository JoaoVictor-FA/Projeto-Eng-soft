export default function Card() {
  return (
    <article className="flex items-center justify-between p-2 rounded bg-blue-secondary">
      <div className="flex justify-center items-center gap-2 p-2 ">
        <div className="p-5 bg-white ">
          <h3 className="font-bold text-black">A1</h3>
        </div>
        <h4  className="font-bold">Lorem Ipsum</h4>
      </div>
      <div className="flex justify-center items-center gap-3">
        <p>dd/mm/YY</p>
        <button className="bg-blue-main p-5 rounded">i</button>
      </div>
    </article>
  )
}
