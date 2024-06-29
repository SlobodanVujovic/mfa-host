class JsWebComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 'JS Web Component';
  }
}

customElements.define('js-web-component', JsWebComp);
