import Phaser from 'phaser';
import bg from "../../assets/menu/menu_PixelArt.png";
export default class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }


    preload() {
        this.load.image('menuBg', bg);
    }

    create(){
        const {width, height} = this.scale;


        // Imagen de fondo
    const bg = this.add.image(width / 2, height / 2, 'menuBg');

    // Ajustar tamaño al canvas
    bg.setDisplaySize(width, height);

    // (opcional) para pixel art
    bg.setOrigin(0.5);

        this.add.text(width/2, height/2 - 120, 'Yohovani Portfolio', {
            fontSize: '32px',
            color: '#ffffff',
            fontFamily: 'monospace'
        }).setOrigin(0.5)
        .setDepth(1);

        const start = this.add.text(width / 2, height / 2, 'START', {
      fontSize: '24px',
      color: '#ff0000',
    })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .setDepth(1);

    start.on('pointerdown', () => {
      this.scene.start('WorldScene');
    });

    start.on('pointerover', () => start.setScale(1.1));
    start.on('pointerout', () => start.setScale(1));
        
    }
}