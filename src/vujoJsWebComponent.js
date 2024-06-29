class VujoComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 'Hello from Vujo JS Web Component';
  }
}

customElements.define('vujo-js-component', VujoComponent);
