import { useState, lazy, Suspense } from 'react';
// Docs: https://software-engineering-corner.zuehlke.com/micro-frontend-module-federation-with-vite-for-react
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// Name of the component itself must match the name of the component we exposed in mfe-body/vite.config.ts in "exposes" property.
import RemoteBody from 'tralalaBody/RemoteBody';

// import RemoteFooter from 'tralalaFooter/RemoteFooter';
// This way of importing component can be used for both static and dynamic URLs definition in vite.config.ts.
const RemoteFooter = lazy(() => import('tralalaFooter/RemoteFooter'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>

      <div id='remoteFooter'>
        <Suspense fallback={<div>Loading...</div>}>
          <RemoteFooter />
        </Suspense>
      </div>

      <div id='remoteBody'>
        <RemoteBody />
      </div>

      <div>{import.meta.env.VITE_TRALALA_BODY_URL}</div>
    </>
  );
}

export default App;
