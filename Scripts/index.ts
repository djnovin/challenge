import '../wwwroot/css/style.css';
import cn from 'classnames';

const Button = (props: {
  text?: string;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}): HTMLButtonElement => {
  const element = document.createElement('button');

  element.className = cn('bg-red-500', props.className);
  element.type = props.type;
  element.textContent = props.text || '';
  props.onClick && element.addEventListener('click', props.onClick);

  return element;
};

class App {
  render(): HTMLElement {
    const root = document.createElement('div');

    const button = Button({
      type: 'button',
      className: cn('text-white p-2'),
      text: 'Upload File',
      onClick: () => {
        console.log('Upload File');
      },
    });

    root.appendChild(button);

    return root;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.appendChild(app.render());
  }
});
