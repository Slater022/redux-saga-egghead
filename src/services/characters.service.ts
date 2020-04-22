import axios from 'axios';
import { parseList } from '../utils/action.utils';

export class CharactersService {

    static api = 'http://www.mocky.io/v2/5e9e0cbc340000a8b36eeb76';

    static fetchCharactersApi = async () => {
        const response = await axios.get(`${CharactersService.api}/api.people/`);
        return parseList(response);
    };
}

