import React, { useState } from "react"

const IndexPage = () => {
  const [num1, setNum1] = useState(0)
  const handleNum1 = (value) => setNum1(value)
  const [num2, setNum2] = useState(0)
  const handleNum2 = (value) => setNum2(value)

  const [resultado, setResultado] = useState('')

  const sumar = () => {
    const res = parseInt(num1) + parseInt(num2);
    setResultado(res)
  }
  const restar = () => {
    const res = parseInt(num1) - parseInt(num2);
    setResultado(res)
  }
  const reset = () => {
    setNum1(0)
    setNum2(0)
    setResultado('')
  }
  return (
    <>
      <h1>Prueba</h1>
      <input type="number" min="0" onChange={e => handleNum1(e.target.value)} value={num1} /> <br />

      <input type="number" min="0" onChange={e => handleNum2(e.target.value)} value={num2} /><br />
      <button onClick={() => sumar()}>Sumar</button>
      <button onClick={() => restar()}>Restar</button>
      <button onClick={() => reset()}>Reset</button>
      <div>
        resultado: {resultado}
      </div>

    </>


  )
}

export default IndexPage
