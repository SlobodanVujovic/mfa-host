class VujoComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 'Hello from VujoComponent';
  }
}

customElements.define('vujo-component', VujoComponent);
