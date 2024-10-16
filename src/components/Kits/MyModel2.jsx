
import { useState } from "react"
import { Data } from '../../assets/Data';
import QuizSection from "./Qiuz/QuizSection";


export const MyModel = () =>
{

  const [kitsAndPlans, setKitsandPlans] = useState(false);
  const [isquizPage, setIsQuizPage] = useState(false);
  const [index, setIndex] = useState(0);


  const [data, setData] = useState(Data)
  const togglePage = () =>
  {
    setKitsandPlans(!kitsAndPlans)
  }
  const toggleQuizPage = () =>
  {
    setIsQuizPage(!isquizPage)
  }
  const next = () =>
  {
    if (index < data.length - 1)
    {
      setIndex(index + 1)
    }

  }


  return (
    <>
      {isquizPage ? (<div className="container ">
        <div className="quiz ">
          <h2 className="font-bold text-lg"> Q: {data[index].question}</h2>
          <div className="flex ml-4 mt-2">
            <input name='select' type='radio' />
            <p className="px-2">{data[index].a}</p>

          </div>
          <div className="flex ml-4">
            <input name='select' type='radio' />
            <p className="px-2">{data[index].b}</p>

          </div>
          <div className="flex ml-4">
            <input name='select' type='radio' />
            <p className="px-2">{data[index].c}</p>

          </div>

          <div className="score"></div>
          <button className="next  bg-green-500 mt-2 ml-20 p-2 px-2" onClick={next}>Next</button>

        </div>
      </div>




      ) : (
        <div className="shadow-lg w-3/12 h-auto ml-[490px] mt-8">
          <h1 className="text-bold text-white text-center mt-8">Do you need help to select kits and plans?</h1>
          <div className="flex justify-center mt-3 ">
            <button className="p-1 px-3 bg-green-600 text-sm font-bold text-white rounded-lg list-none mb-3 
        cursor-pointer" onClick={toggleQuizPage}>YES</button>
            <button className="p-1 px-3 bg-red-500 text-sm font-bold text-white rounded-lg ml-10 
    list-none mb-3" onClick={togglePage}>NO</button>
          </div>
        </div>


      )}

    </>
  )
}