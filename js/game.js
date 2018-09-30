const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 680,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200
      }
    }
  },
  scene: [
    Fase
  ]
}

const game = new Phaser.Game(config)
