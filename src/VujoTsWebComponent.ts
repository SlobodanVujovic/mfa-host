class VujoTsComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 'Hello from Vujo TS Web Component';
  }
}

customElements.define('vujo-ts-component', VujoTsComponent);
