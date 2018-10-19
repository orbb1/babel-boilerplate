import './styles.scss';

function printHello() {
  const rootEl = document.querySelector('.root');
  const messageEl = document.createElement('h2');
  const messageText = 'hello babel!';

  messageEl.innerText = messageText;
  rootEl.appendChild(messageEl);
}

printHello();
