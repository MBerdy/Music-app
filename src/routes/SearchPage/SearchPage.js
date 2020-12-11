import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../../components/SearchBar/SearchBar';
import ResultList from '../../components/ResultList/ResultList';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import * as actions from '../../store/actions/index';
import classes from './SearchPage.module.css'

class SearchPage extends React.Component {
    state = {
        trackName: null
    }

    componentWillUnmount() {
        this.props.onSearchTrackClear()
    }

    searchTrackChangedHandler = (event) => {
        const trackName = event.target.value;
        this.setState({ trackName })
    }

    searchTrackPressedHandler = (event) => {
        if (event.key === 'Enter') {
            this.props.onSearchTrack(this.state.trackName);
            event.target.value = ''
        }


    }
    render() {
        let tracks;
        if (this.props.tracks && this.props.tracks.length) {
            tracks = <ResultList tracks={this.props.tracks} />
        } else if (this.props.tracks && !this.props.length) {
            tracks = <p className={classes.Message}>Nothing found...Please try again!</p>
        }

        return (
            <>
                {this.props.error ? <ErrorMessage/> : (
                    <>
                        <SearchBar
                            changed={(e) => this.searchTrackChangedHandler(e)}
                            pressed={(e) => this.searchTrackPressedHandler(e)} />
                 : {tracks}
                    </>
                )}

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        tracks: state.search.tracks,
        loading: state.search.loading,
        error: state.search.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchTrack: (trackName) => dispatch(actions.searchTrack(trackName)),
        onSearchTrackClear: () => dispatch(actions.searchTrackClear())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);