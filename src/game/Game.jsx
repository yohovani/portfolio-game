// src/game/Game.js
import Phaser from 'phaser';
import MenuScene from './scenes/MenuScene';
import WorldScene from './scenes/WorldScene';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  width: 800,
  height: 600,
  backgroundColor: '#000000',
  physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      },
  scene: [MenuScene, WorldScene],
  render: { pixelArt: true },
};

export default config;
