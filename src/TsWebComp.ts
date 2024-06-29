class TsWebComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 'TS Web Component';
  }
}

customElements.define('ts-web-component', TsWebComp);
