import './styles/style.scss';

const container = document.createElement('div');
container.classList.add('container');
container.innerHTML = 'some long text';
const body = document.querySelector('body');
body.appendChild(container);
