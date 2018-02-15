export const UPDATE_COLORS = 'UPDATE_COLORS';
export const UPDATE_SELECTED_COLOR = 'UPDATE_SELECTED_COLOR';
export const ACTIVATE_LIST = 'ACTIVATE_LIST';
export const CHANGE_ACCEPTED_COLOR = 'CHANGE_ACCEPTED_COLOR'

export const updateColors = colors => ({
    type: UPDATE_COLORS,
    colors
});

export const updateSelectedColor = color => ({
    type: UPDATE_SELECTED_COLOR,
    color
});

export const activateList = () => ({
    type: ACTIVATE_LIST
});

export const changeAcceptedColor = color => ({
    type: CHANGE_ACCEPTED_COLOR,
    color
});
