import React from 'react';
import { withRouter } from 'react-router-dom';

class TypeItem extends React.Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.updateFilter("ctype", this.props.type);
        this.props.history.push("/searchResults");
    }

    render(){
        return (
            <div>
                <li onClick={this.handleClick}>
                    {this.props.type}
                </li>
            </div>
        )
    }
}

export default withRouter(TypeItem);