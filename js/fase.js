class Fase extends Phaser.Scene {
  constructor() {
    super({ key: "Fase" })
  }

  preload() {
    this.load.image('hero', 'assets/lee.png')
    this.load.image('portal', 'assets/portal.png')
    this.load.image('background', 'assets/background-city.png')
  }

  create() {
    this.background = this.add.sprite(600, 300, 'background')

    this.lee = this.add.image(845, 495, 'hero') // Setting position X Y and using hero key
    this.lee.setScale(.07) // Setting size scale
    this.lee.setOrigin(0.5, 0.5) // Anchor center X and Y

    this.portal = this.add.image(230, 580, 'portal')
    this.portal.setOrigin(0.5, 0.5)
    this.portal.setScale(.1)

    this.keyA = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    )

    this.keyD = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    )

    this.keyW = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.W
    )

    this.keyS = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    )
  }

  update(delta) {
    this.portal.angle += 8
    if (this.keyA.isDown) {
      this.lee.x -= 2
    }
    if (this.keyD.isDown) {
      this.lee.x += 2
    }
    if (this.keyW.isDown) {
      this.lee.y -= 2
    }
    if (this.keyS.isDown) {
      this.lee.y += 2
    }
  }

}
