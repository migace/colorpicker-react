import { connect } from 'react-redux';
import ColorPickerForm from '../../components/ColorpickerForm';
import ColorsService from '../../services/ColorsService';
import _ from 'lodash';
import React from 'react';
import { 
    updateColors, 
    activateList,
    changeAcceptedColor 
} from '../../actions/colorpicker';
import {
    AUTOSUGGEST_MIN_CHARS
} from '../../config';

class ColorPickerContainer extends React.Component {
    constructor(props) {
        super(props);

        this.colorsService = new ColorsService();
        this.colors = [];
        this.state = {
            inputText: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({inputText: nextProps.selectedColor.name});
    }

    componentWillMount() {
        this.colorsService.getColors().then(colors => this.colors = colors);
    }

    onChangeHandler(value) {
        if (value.length >= AUTOSUGGEST_MIN_CHARS) {
            const result = _.filter(this.colors, color => color.name.indexOf(value) !== -1);
            this.props.updateColors(result);
        }

        this.setState({inputText: value});
    }

    onFocusHandler() {
        this.props.onFocus();
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.onSubmit(this.props.selectedColor);
    }

    render() {
        return (
            <ColorPickerForm 
                onChange={this.onChangeHandler.bind(this)}
                onFocus={this.onFocusHandler.bind(this)}
                selectedColor={this.state.inputText}
                onSubmit={this.onSubmitHandler.bind(this)}
            />
        );
    }
}

const mapStateToProps = state => ({
    selectedColor: state.colorpicker.selectedColor || ''
});

const mapDispatchToProps = dispatch => ({
    updateColors: (colors) => dispatch(updateColors(colors)),
    onFocus: () => dispatch(activateList()),
    onSubmit: (color) => dispatch(changeAcceptedColor(color))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorPickerContainer);
