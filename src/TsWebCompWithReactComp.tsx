import ReactDOM from 'react-dom/client';
import ReactComp from './ReactComp';

class TsCompWithReactComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const root = ReactDOM.createRoot(this);
    root.render(<ReactComp />);
  }
}

customElements.define('ts-web-react-component', TsCompWithReactComp);
