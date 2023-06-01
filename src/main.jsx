import ReactModal from 'react-modal';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactModal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
