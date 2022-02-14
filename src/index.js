import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ContextProvider from './store/ContextProvider'
import App from './App'
import './styles/index.scss'

ReactDOM.render(
   <Router>
      <ContextProvider>
         <App />
      </ContextProvider>
   </Router>,
   document.getElementById('root')
)
