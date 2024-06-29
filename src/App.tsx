import { useState, lazy, Suspense } from 'react';
// Docs: https://software-engineering-corner.zuehlke.com/micro-frontend-module-federation-with-vite-for-react
import './App.css';
// Name of the component itself must match the name of the component we exposed in mfe-body/vite.config.ts in "exposes" property.
import RemoteBody from 'tralalaBody/RemoteBody1';
import RemoteBody2 from 'tralalaBody/RemoteBody2';
// import vujo-component from 'tralalaBody/vujo-component';

// import RemoteFooter from 'tralalaFooter/RemoteFooter';
// This way of importing component can be used for both static and dynamic URLs definition in vite.config.ts.
const RemoteFooter = lazy(() => import('tralalaFooter/RemoteFooter'));

function App() {
  const [count, setCount] = useState(0);

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

        {/* Adding local Web component to the React component. Da bi ovo radilo moramo imati dodat JS file, u kome je definisan Web componenta, u index.html-u kroz script tag. */}
        <div id='localWebComponent'>
          <vujo-js-component></vujo-js-component>
        </div>
      </div>
    </div>
  );
}

export default App;
