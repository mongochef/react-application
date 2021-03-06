import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import {_} from 'underscore';
import { userActions } from '../_actions';

class GistsPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(userActions.getGists());
        this.state = {
            repoName:"",
        };
    }

    handleSubmit (repo,e) {
        const { dispatch } = this.props;
        dispatch(userActions.addGists(repo.name.id,repo.name.description));
    }

    render(){
        let items = this.props.gists.gists || [];
        const navbarColor = {
            "color":"#FFFFFF",
            "backgroundColor": "#FFFFFF",
            border:"2px #CACFD2 solid",

        };
        const divStyle = {
            padding: "50px"
        };
        const container = {
            "color":"#FFFFFF",
            "backgroundColor": "#FFFFFF",
            border:"2px #CACFD2 solid",
            "borderRadius":"4px",
            "marginTop":"50px",
            //"height":"200px",
            "clear":"both",
            "paddingBottom":"5px"
        };
        const heading = {
            "color":"#17202A",
            "paddingLeft":"50px"
        };
        const description = {
            "color":"#566573",
            "paddingLeft":"50px"
        };
        const buttonStyle = {
            marginLeft:"48%"
        }
        return (
            <div style={divStyle}>
            <nav className="navbar navbar-default" style={navbarColor}>
            <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="#">BlockCluster</a>
            </div>
            <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
        </ul>
        </div>
        </nav>
        {items.map((name,index) => {
            return (
                <div key={index } style={container}>
                <h3 style={heading}>Description-{name.description}</h3>
        <p style={description}>Id-{name.id}</p>
        <p style={description}>URL-{name.url}</p>
        <button type="button" className="btn btn-success btn-lg" style={buttonStyle} onClick={this.handleSubmit.bind(this,{name})}>Add</button>
</div>
)
})}

</div>
);
}
}


function mapStateToProps(state) {
    console.log("state",state);
    const {gists} = state;
    return {
        gists
    };
}

const connectedGistsPage = connect(mapStateToProps)(GistsPage);
export { connectedGistsPage as GistsPage };

