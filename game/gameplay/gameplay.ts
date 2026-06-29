import { Stage } from "../../spindle/app/stage";

export class GameplayStage extends Stage {
    name(): string {
        return "Gameplay";
    }

    on_start(): void {
        console.log("Gameplay started");
    }

    on_end(): void {
        console.log("Gameplay ended");
    }
}