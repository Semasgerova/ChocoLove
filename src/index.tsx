import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './routers/App';
import './assets/style.scss'
import 'react-toastify/dist/ReactToastify.css';
import configureStore from './myredux/store/configureStore';
import { Provider } from 'react-redux';
import { getBlogsFromDatabase } from './myredux/actions/blogAction';



const store: any = configureStore();

const result = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
 <div className="loading">
   <div className="box d-flex flex-column align-items-center justify-content-center text-center w-100 h-100">
  <img
    src="http://crems.like-themes.com/wp-content/uploads/2019/06/404_crems.png"
    alt=""
    width={400}
  /></div>
 </div>,
  document.getElementById("root") as HTMLElement
);

store.dispatch(getBlogsFromDatabase()).then(()=> {
  ReactDOM.render(result, document.getElementById("root") as HTMLElement);
});

