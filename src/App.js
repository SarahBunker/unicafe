import { useState } from 'react'

const Feedback = ({setGood, setNeutral, setBad, good, neutral, bad}) => {
  return (
    <>
    <Title title={"give feedback"} />
    <div>
      <Button clickFunction={() => {setGood(good+1)}} text={"good"} />
      <Button clickFunction={() => {setNeutral(neutral+1)}} text={"neutral"} />
      <Button clickFunction={() => {setBad(bad+1)}} text={"bad"} />
    </div>
    </>
  )
}

// <Feedback setGood={setGood} good={good} setNeutral={setNeutral} neutral={neutral} setBad={setBad} bad={bad} />

const Title = ({title}) => {
  return <h1>{title}</h1>;
}

const Button = ({clickFunction, text}) => {
  return <button onClick={clickFunction}>{text}</button>
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {text === "positive" && "%"}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }
  let total = good + neutral + bad;
  console.log("total", total);
  let sum = good - bad;
  console.log("sum", sum);
  let average = sum/total || 0;
  let positivePercent = good/total*100 || 0;
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={total} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positivePercent} />
      </tbody>
    </table>
  )
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
