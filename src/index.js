/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './global.scss';

import { StoreProvider } from './store';
import AppRoutes from './routes';
import AppProvider from './layouts/App';

import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';

ReactDOM.render(
    <ARCanvas
        camera={{ position: [0, 0, 0] }}
        dpr={window.devicePixelRatio}
        onCreated={({ gl }) => {
            gl.setSize(window.innerWidth, window.innerHeight);
        }}
    >
        <ambientLight />
        <pointLight position={[10, 10, 0]} />
        <ARMarker type={'pattern'} patternUrl={'data/hiro.patt'}>
            <mesh>
                <boxBufferGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={'green'} />
            </mesh>
        </ARMarker>
    </ARCanvas>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
