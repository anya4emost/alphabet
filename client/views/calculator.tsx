import * as React from 'react';
import {Screen} from "./ScreenComponent";
import {observer, Provider} from "mobx-react";
import calculations from '../store/screenStore';

@observer
export default class Calculator extends React.Component<Props, {}> {

    render() {
        return (
            <Provider calculations={calculations}>
                <div className="whole">
                    <Screen></Screen>
                </div>
            </Provider>
        );
    }
}

interface Props {

}