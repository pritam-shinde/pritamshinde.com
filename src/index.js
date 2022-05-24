import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'animate.css';
import '../node_modules/aos/dist/aos.css'
import '../node_modules/aos/dist/aos'
import AOS from 'aos';
import App from './App';
import './styles/index.css';

AOS.init()

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<BrowserRouter><App /></BrowserRouter>)