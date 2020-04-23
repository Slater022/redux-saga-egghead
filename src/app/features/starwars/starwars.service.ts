import { Observable, of } from 'rxjs';
import rx from './../../configuration/rxjs.config';
import ax from './../../configuration/axios.utils';
import { fetchStarWarsSuccess } from '../../store/sw.actions';
import { put } from 'redux-saga/effects'
import { parseList } from '../../utils/action.utils';

class StarwarsService {
    api = '5e9f1d902d00007b00cb79eb';

    // Return the observable on the side to be able to test the code
    fetchCharacters$: Observable<[]> = rx.get<[]>(this.api);

    //Actual Function called by the action
    fetchCharacters() {
        //starwarsState.changeLoadingStatus(true);
        this.fetchCharacters$.subscribe(
            data => {
                if (data) {
                    console.log("Character Service : Fetch Success")
                    put(fetchStarWarsSuccess(data));
                    //starwarsState.fetchCharactersSuccess(data);
                }
            },
            err => {
                console.log("Character Service : Fetch Error");
               // starwarsState.triggerAnError(err);
            },
            () => {
               // starwarsState.changeLoadingStatus(false);
                console.log('Character Service : Fetch Complete')
            }
        );
    }

    fetchCharactersAx =  async () => {
        const response = await ax.get<[]>(this.api)
        return parseList(response);
    }
}

export const starwarsService = new StarwarsService();
