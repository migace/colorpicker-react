import {
    COLOR_API_URL
} from '../config';

let instance = null;

class ColorsService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    getColors() {
        return fetch(COLOR_API_URL)
            .then(data => data.json());
    }
}

export default ColorsService;
