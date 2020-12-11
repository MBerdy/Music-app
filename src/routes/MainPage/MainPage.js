import React from 'react';
import { connect } from 'react-redux';

import MusicCards from '../../components/MusicCards/MusicCards'
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Spinner from '../../components/UI/Spinner/Spinner';

class MainPage extends React.Component {
    trackSelectedhandler =(artistName)=>{
        this.props.history.push('/artist/'+ artistName)
    }

    render() {
        let result =<Spinner />
        if(!this.props.loading && this.props.music) {
            result =<MusicCards
                 music={this.props.music}
                 trackSelected = {this.trackSelectedhandler} />
        }
        return (
            <>
                {this.props.error ? <ErrorMessage /> : result} 
            </>

        )
    }

}

const mapStateToProps = state => {
    return {
        music: state.music.music,
        loading: state.music.loading,
        error: state.music.error
    }
}

export default connect(mapStateToProps)(MainPage);