import React from 'react';
import {connect} from 'react-redux';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';
import classes from './ArtistPage.module.css';

class ArtistPage extends React.Component {

    componentDidMount() {
        this.props.onGetArtistInformation(this.props.match.params.name)
    }

    componentWillUnmount() {
        this.props.onClearArtistInformation()
    }

    render() {
        let artistInf = <Spinner />
        if(!this.props.loading && this.props.artist) {
            artistInf = (
                <div className={classes.ArtistPage}>
                    <img src={this.props.artist.img} alt={this.props.artist.name}/>
                    <h2>{this.props.artist.name}</h2>
                    <p>{this.props.artist.bio}</p>
                    {this.props.artist.tags.map(tag => (
                        <a key={tag.name} href={tag.url}>{tag.name}</a>
                    ))}
                
                </div>
            )
        }
        return(
            <>
               {this.props.error ? <ErrorMessage /> : artistInf}
            </>
        )
    }
}

const mapStateToProps =state => {
    return {
        artist: state.artist.artistInf,
        loading: state.artist.loading,
        error: state.artist.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetArtistInformation: (artistName) => dispatch(actions.getArtistInf(artistName)),
        onClearArtistInformation: () => dispatch(actions.getArtistInfClear())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ArtistPage);