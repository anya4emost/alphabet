import * as React from "react";
import {withRouter} from "react-router";

const withR: any = withRouter;

@withR
export class Letter extends React.Component<Props, {}> {
    render() {

        return (
            <div className="pictures">
                <div onClick={()=>{window.location.href = '/'}}><img className="arrow" src='../resources/images/arrow.jpg'/></div>
                <div><img src={`../resources/images/${this.props.match.params.letter}.jpg`}/></div>
            </div>
        );
    }
}

interface Props {
    match?: any;
}