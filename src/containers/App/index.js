import ColorpickerFormContainer from '../ColorPickerForm';
import ColorPickerListContainer from '../ColorPickerList';
import { connect } from 'react-redux';
import React from "react";
import styles from './App.scss';
import hexToRgba from '../../util/hexToRgba';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.AppContainer}>
                <nav className="navbar is-dark bg-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            Colorpicker App
                        </a>
                    </div>
                </nav>
                <main className={styles.Content} style={{background: `rgba(${this.props.background})`}}>
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <ColorpickerFormContainer />
                            <ColorPickerListContainer />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    background: hexToRgba(state.colorpicker.acceptedColor.hex, '.5')
});

export default connect(
    mapStateToProps,
    null
)(App);
