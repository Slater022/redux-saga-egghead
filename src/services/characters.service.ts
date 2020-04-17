import axios from 'axios';
import { parseList } from '../utils/action.utils';

export class CharactersService {

    static api = 'https://swapi.co/';

    static fetchCharactersApi = async () => {
        const response = await axios.get(`${CharactersService.api}api.people/`);
        return parseList(response);
    };
}

