import React from 'react';

import Header from '../../components/Header';

import styles from './styles.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
            <a-scene embedded arjs>
                <a-marker preset="hiro">
                    <a-entity
                        position="0 0 0"
                        scale="0.05 0.05 0.05"
                        gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                    ></a-entity>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
};

export default Home;
