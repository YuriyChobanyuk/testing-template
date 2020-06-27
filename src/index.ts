import './styles/style.scss';
import { add } from './app/shell/shell';

const a = 34;
const container = document.createElement('div');
container.classList.add('container');
container.innerHTML = 'some long text';
const body = document.querySelector('body');
body.appendChild(container);
