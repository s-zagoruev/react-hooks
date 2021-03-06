import {Component, useEffect, useState} from "react"
import ReactDOM from "react-dom"

const App = () => {
  const [value, setValue] = useState(1)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    console.log('useEffect')

    return () => {
      console.log('clear')
    }
  }, [value])

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(v => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <PlanetInfo id={value}/>
      </div>
    )
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
}

const usePlanetInfo = (id) => {
  const [name, setName] = useState(null)
  useEffect(() => {
    let cancelled = false
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then(res => res.json())
      .then(data => !cancelled && setName(data.name))

    return () => cancelled = true
  }, [id])

  return name
}

const PlanetInfo = ({id}) => {
  const name = usePlanetInfo(id)

  return (
    <div>{id} - {name}</div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

