import { CharacterModel } from './character.model';

export interface InitialSwState {
    starWars: CharacterModel[]
}

export class InitialSwState implements InitialSwState{
    constructor() {
        this.starWars = [];
    }
}
