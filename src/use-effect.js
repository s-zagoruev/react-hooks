import {Component, useEffect, useState} from "react"
import ReactDOM from "react-dom"

const App = () => {
  const [value, setValue] = useState(0)
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
        <ClassCounter value={value}/>
        <HookCounter value={value}/>
      </div>
    )
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
}

const HookCounter = ({value}) => {

  // //"analog" componentDidMount
  // useEffect(() => {
  //   console.log('mount')
  // }, [])
  //
  // //"analog" componentWillUnmount
  // useEffect(() => {
  //   return () => console.log('will unmount')
  // }, [])

  //combination _mount_ and _unmount_
  useEffect(() => {
    console.log('mount')
    return () => console.log('will unmount')
  }, [])

  //"analog" componentDidUpdate
  useEffect(() => {
    console.log('did update')
  })

  return <p>{value}</p>
}

class ClassCounter extends Component {
  componentDidMount() {
    console.log('class: componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('class: componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('class: componentWillUnmount')
  }

  render() {
    return (
      <p>{this.props.value}</p>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
