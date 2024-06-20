import Phaser from "phaser";
import { AUTO, Scale } from "phaser";
import Bootloader from "./scenes/bootloader";
import Outro from "./scenes/outro";
import Splash from "./scenes/splash";
import Transition from "./scenes/transition";
import Game from "./scenes/game";

const config = {
  type: AUTO,
  scale: {
    mode: Scale.RESIZE,
    width: window.innerWidth * window.devicePixelRatio,
    autoCenter: Scale.CENTER_BOTH,
    height: window.innerHeight * window.devicePixelRatio
  },
  autoRound: false,
  parent: "contenedor",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [Bootloader, Splash, Transition, Game, Outro],
};

const game = new Phaser.Game(config);
