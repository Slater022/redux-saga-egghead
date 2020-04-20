import { CharacterModel } from './character.model';

export interface InitialSwState {
    starWars: []
}

export class InitialSwState implements InitialSwState{
    constructor() {
        this.starWars = [];
    }
}
