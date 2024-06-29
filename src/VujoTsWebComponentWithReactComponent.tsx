import ReactDOM from 'react-dom/client';
import MyReactComponent from './MyReactComponent';

class VujoTsCompWithReactComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const root = ReactDOM.createRoot(this);
    root.render(<MyReactComponent />);
  }
}

customElements.define('vujo-ts-react-component', VujoTsCompWithReactComp);
