declare namespace JSX {
  // IntrinsicElements interface is provided by TypeScript to aid in type checking when using JSX syntax.
  // It essentially maps standard HTML elements (like div, span, input, etc.) to their respective HTML attribute types.
  // This allows TypeScript to understand what attributes each HTML element accepts when they are used in JSX.
  interface IntrinsicElements {
    // When we want to extend or customize JSX.IntrinsicElements, to include additional elements or attributes, we just need to declare this Module Augmentation and we add
    // our own custom intrinsic elements to the JSX namespace.
    // https://goulet.dev/posts/consuming-web-component-react-typescript/
    'vujo-js-component': any;
  }
}
