import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom'

import NavigationItems from '../../components/NavigationItems/NavigationItems';
import ArtistPage from '../../routes/ArtistPage/ArtistPage';
import MainPage from '../../routes/MainPage/MainPage';
import SearchPage from '../../routes/SearchPage/SearchPage';
import * as actions from '../../store/actions/index';
class Layout extends React.Component {
    componentDidMount() {
        this.props.onSetMusic()
    }

    render() {
        return (
            <>
                <nav>
                    <NavigationItems />
                </nav>
                <Switch>
                    <Route path ='/search' component ={SearchPage} />
                    <Route path={'/artist' +"/:name"}  component ={ArtistPage}/>
                    <Route path='/' exact component={MainPage} />
                    <Redirect from='/artist' to='/' />
                </Switch>
            </>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onSetMusic: () => dispatch(actions.setMusic())
    }
}

export default connect(null, mapDispatchToProps)(Layout);
