import arrow from "../assets/Arrow.svg";
export default function Card({ isTeacher = false }: { isTeacher?: boolean }) {
  return (
    <>
      <article className="flex items-center justify-between p-2 rounded bg-blue-secondary">
        <div className="flex justify-center items-center gap-2 p-2 ">
          <div className="p-5 bg-white rounded ">
            <h3 className="font-bold text-black">A1</h3>
          </div>
          <h4 className="font-bold">Lorem Ipsum</h4>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p>dd/mm/YY</p>
          {!isTeacher && (
            <button className="bg-blue-main hover:bg-blue-darker transition p-3 rounded">
              <img src={arrow} alt="arrow" />
            </button>
          )}
        </div>
      </article>
      {isTeacher && (
        <div className="flex items-center gap-3">
          <button className="bg-cyan-dark hover:bg-blue-darker transition p-3 rounded">
            Ver Respostas
          </button>
        </div>
      )}
    </>
  );
}
