import { useState, lazy, Suspense, useEffect } from 'react';
// Docs: https://software-engineering-corner.zuehlke.com/micro-frontend-module-federation-with-vite-for-react
import './App.css';
// Name of the component itself must match the name of the component we exposed in mfe-body/vite.config.ts in "exposes" property.
import RemoteBody from 'tralalaBody/RemoteBody1';
import RemoteBody2 from 'tralalaBody/RemoteBody2';

// import RemoteFooter from 'tralalaFooter/RemoteFooter';
// This way of importing component can be used for both static and dynamic URLs definition in vite.config.ts.
const RemoteFooter = lazy(() => import('tralalaFooter/RemoteFooter'));

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loadComponent = async () => {
      await import('tralalaBody/RemoteTsWebBody');
      // Not working. Seems there are 2 React instances in host app.
      // await import('tralalaBody/RemoteTsWebBodyWithReact');
    };

    loadComponent();
  }, []);

  return (
    <div id='container'>
      <div id='header'>
        <h1>Host app</h1>
      </div>

      <div id='sideBar'>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
      </div>

      <div id='body'>
        <h1>Remote repo at {import.meta.env.VITE_TRALALA_BODY_URL}</h1>
        <div id='remoteBodyComponent1'>
          <RemoteBody />
        </div>

        <div id='remoteBodyComponent2'>
          <RemoteBody2 />
        </div>
      </div>

      <div id='footer'>
        <Suspense fallback={<div>Loading...</div>}>
          <RemoteFooter />
        </Suspense>

        {/* Adding local Web component to the React component. In order for this to work we need to add JS file, in which Web component is defined, into index.html-u via script tag. */}
        <div id='localWebComponent'>
          <js-web-component></js-web-component>
        </div>

        {/* Adding remote Web component to the React component. In order for this to work we need to import exposed component via useEffect hook at line 15. */}
        <div id='remoteWebComponent'>
          <remote-ts-web-component></remote-ts-web-component>
        </div>

        {/* Adding remote Web component with React component in itself, to the React component. In order for this to work we need to import exposed component via useEffect hook at line 15. */}
        {/* Does not work. */}
        {/* <div id='remoteWebComponentWithReact'>
          <remote-ts-web-react-component></remote-ts-web-react-component>
        </div> */}
      </div>
    </div>
  );
}

export default App;
