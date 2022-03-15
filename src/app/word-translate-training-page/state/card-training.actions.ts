import { TrainingOptionsModel } from "src/app/training-selection-page/models/training-options.model";
import { WordKnowledgeLevel } from "../enums/word-knowledge-level";

export class GetTrainingData {
    static readonly type = '[CardTraining] Get training data';

    constructor(public options: TrainingOptionsModel) { }
}

export class SetSongLines {
    static readonly type = '[CardTraining] Set song lines';

    constructor(public cardIndex: number) { }
}

export class SetCurrentWord {
    static readonly type = '[CardTraining] Set current word';

    constructor(public cardIndex: number) { }
}

export class ChangeWordKnowledgeLevel {
    static readonly type = '[CardTraining] Change word knowledge level';

    constructor(public level: WordKnowledgeLevel) { }
}
