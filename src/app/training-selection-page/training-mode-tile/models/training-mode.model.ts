import { TrainingModes } from "../enums/training-modes.enum";

export class TrainingModeModel {
    name: string;
    description: string;
    mode: TrainingModes;

    constructor(init?: Partial<TrainingModeModel>) {
        Object.assign(this, init);
    }
}
