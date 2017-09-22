import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Switch} from "react-router";
import Alphabet from "./views/alphabet";
import {Letter} from "./views/LetterComponent";
import {routeAdd} from "./services/constants";

export default class Routes extends React.Component<{}, {}> {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={`${routeAdd}/letter/:letter`} component={Letter}/>
                    <Route exact path={`${routeAdd}`} component={Alphabet}/>
                </Switch>
            </BrowserRouter>
        )
    }
}