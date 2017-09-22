import * as React from "react";
import {withRouter} from "react-router";
import {routeAdd} from "../services/constants";

const withR: any = withRouter;

@withR
export class Letter extends React.Component<Props, {}> {
    play = (sound: string) => {
        let newAudio = new Audio(`${routeAdd}resources/audio/${sound}.mp3`);
        newAudio.play();
    };
    back = () =>{

        this.play('back');
        setTimeout(()=>{window.location.href = `${routeAdd}`}, 50);
    };
    render() {
        return (
            <div className="pictures">
                <div onClick={this.back}><img className="arrow" src={`..${routeAdd}resources/images/arrow.jp`}/></div>
                <div><img src={`..${routeAdd}resources/images/${this.props.match.params.letter}.jpg`}/></div>
            </div>
        );
    }
}

interface Props {
    match?: any;
}