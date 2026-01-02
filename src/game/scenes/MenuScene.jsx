import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create(){
        const {width, height} = this.scale;

        this.add.text(width/2, height/2 - 100, 'Yohovani Portfolio', {
            fontSize: '32px',
            color: '#ffffff',
            fontFamily: 'monospace'
        }).setOrigin(0.5);

        const start = this.add.text(width/2, height/2, 'START',{
            fontSize: '24px',
            color: '#ff0000ff',
        }).setOrigin(0.5)
        .setInteractive({ useHandCursor: true});

        start.on('pointerdown', () => {
            this.scene.start('WorldScene');
        });

        start.on('pointerover', () => start.setScale(1.1));
        start.on('pointerover', () => start.setScale(1));
        
    }
}