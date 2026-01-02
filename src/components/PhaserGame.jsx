// src/components/PhaserGame.jsx
import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import Game from '../game/Game';

export default function PhaserGame() {
  const gameRef = useRef(null);

  useEffect(() => {
    if (gameRef.current) return;

    gameRef.current = new Phaser.Game(Game);

    return () => {
      gameRef.current.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div id="phaser-container" />;
}
