import React, { useRef, useEffect } from 'react';
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    this.load.spritesheet('player', 'src/assets/sprits/yoho_64x64.png', {
      frameWidth: 64,
      frameHeight: 64
    });
    this.load.image('background', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74e37d9c-6a40-48b3-a42f-e5b674911024/d3k3dmb-fffae1e4-5604-47a7-85f2-25d6ac7b7688.png/v1/fill/w_900,h_627,q_80,strp/pallet_town___pueblo_paleta_by_deathkof_d3k3dmb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI3IiwicGF0aCI6IlwvZlwvNzRlMzdkOWMtNmE0MC00OGIzLWE0MmYtZTViNjc0OTExMDI0XC9kM2szZG1iLWZmZmFlMWU0LTU2MDQtNDdhNy04NWYyLTI1ZDZhYzdiNzY4OC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wN3Eaeg-eUUoTMHirGsPT0ZWtBK92fkcDzXwQMgaAog');
  }

  create() {
    this.add.image(400, 300, 'background');
    this.player = this.physics.add.sprite(64, 64, 'player');
    this.player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1
      });
      
      this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('player', { start: 4, end: 6 }),
        frameRate: 8,
        repeat: -1
      });
      
      this.anims.create({
        key: 'wave',
        frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
        frameRate: 6,
        repeat: 0
      });
      
      this.anims.create({
        key: 'punch',
        frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
        frameRate: 10,
        repeat: 0
      });

      this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
        frameRate: 8,
        repeat: 0
      });

      this.player.anims.play('idle');

  }

  update() {
    const speed = 160;
    this.player.setVelocity(0);
  
    const isMoving =
      this.cursors.left.isDown ||
      this.cursors.right.isDown ||
      this.cursors.up.isDown ||
      this.cursors.down.isDown;
  
    if (isMoving) {
      this.player.anims.play('walk', true);
    } else {
      this.player.anims.play('idle', true);
    }
  
    if (Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
      this.player.anims.play('punch', true);
    }
  
    if (Phaser.Input.Keyboard.JustDown(this.cursors.shift)) {
      this.player.anims.play('wave', true);
    }
  
    if (Phaser.Input.Keyboard.JustDown(this.cursors.down)) {
      this.player.anims.play('down', true);
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-speed);
      this.player.setFlipX(true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(speed);
      this.player.setFlipX(false);
    }
  
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-speed);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(speed);
    }
  }
  
}

export const GameComponent = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    if (gameRef.current) return;

    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-container',
      physics: {
        default: 'arcade',
        arcade: { debug: false }
      },
      scene: [MainScene]
    });

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <div id="game-container" />;
};
