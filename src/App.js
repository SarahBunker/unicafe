import { useState } from 'react'

const Title = ({title}) => {
  return <h1>{title}</h1>;
}

const Button = ({clickFunction, text}) => {
  return <button onClick={clickFunction}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Title title={"give feedback"} />
      <div>
        <Button clickFunction={() => {setGood(good+1)}} text={"good"} />
        <Button clickFunction={() => {setNeutral(neutral+1)}} text={"neutral"} />
        <Button clickFunction={() => {setBad(bad+1)}} text={"bad"} />
      </div>
      <Title title={"statistics"} />
      <div>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
      </div>
    </>
  )
}

export default App
