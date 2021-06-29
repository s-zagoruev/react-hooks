import React, {useContext} from 'react'
import ReactDOM from 'react-dom'

const MyContext = React.createContext()

const App = () => {
  return (
    <MyContext.Provider value="What A Wonderful World">
      <Child/>
    </MyContext.Provider>
  )
}

const Child = () => {
  //It was:
  // return (
  //   <MyContext.Consumer>
  //     {
  //       (value) => <p>{value}</p>
  //     }
  //   </MyContext.Consumer>
  // )

  //It become:
  const value = useContext(MyContext)
  return <p>{value}</p>
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)

