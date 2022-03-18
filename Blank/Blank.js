/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Blank extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Blank/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("pop", "./Blank/sounds/pop.wav"),
      new Sound(
        "C418 - Subwoofer Lullaby - Minecraft Volume Alpha",
        "./Blank/sounds/C418 - Subwoofer Lullaby - Minecraft Volume Alpha.mp3"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone(
        "C418 - Subwoofer Lullaby - Minecraft Volume Alpha"
      );
      yield;
    }
  }
}
