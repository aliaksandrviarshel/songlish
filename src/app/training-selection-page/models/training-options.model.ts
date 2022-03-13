import { TrainingType } from "../enum/training-type";

export class TrainingOptionsModel {
    type: TrainingType

    constructor(init?: Partial<TrainingOptionsModel>) {
        Object.assign(this, init);
    }
}
