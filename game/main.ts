import type { Stage } from "spindle/app/stage";
import { Engine } from "spindle";
import "./assets/style.css";
import { GameplayStage } from "./gameplay/gameplay";

let stages: Stage[] = [
    new GameplayStage()
];

Engine.start(stages, 'Gameplay');