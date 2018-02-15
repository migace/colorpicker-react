import ColorPickerList from '../../components/ColorPickerList';
import { connect } from 'react-redux';
import { updateSelectedColor } from '../../actions/colorpicker';

const mapStateToProps = state => ({
    colors: state.colorpicker.colors,
    listActive: state.colorpicker.listActive
});

const mapDispatchToProps = dispatch => ({
    selectItem: (color) => dispatch(updateSelectedColor(color))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorPickerList);
