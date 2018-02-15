import { 
    UPDATE_COLORS,
    UPDATE_SELECTED_COLOR,
    ACTIVATE_LIST,
    CHANGE_ACCEPTED_COLOR
} from '../actions/colorpicker';

const initialState = {
    colors: [],
    selectedColor: '',
    listActive: false,
    acceptedColor: '#fff'
};

function colorpicker(state = initialState, action) {
    switch(action.type) {
        case ACTIVATE_LIST:
            return {...state, listActive: true};
        case UPDATE_COLORS:
            return {...state, colors: action.colors, listActive: true};
        case UPDATE_SELECTED_COLOR:
            return {...state, selectedColor: action.color, listActive: false}
        case CHANGE_ACCEPTED_COLOR:
            return {...state, acceptedColor: action.color};
        default: 
            return state;
    }
}

export default colorpicker;
