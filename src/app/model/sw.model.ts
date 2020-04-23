export interface InitialSwState {
    starwars: []
}

export class InitialSwState implements InitialSwState{
    constructor() {
        this.starwars = [];
    }
}
