import React from 'react';
import { withRouter } from 'react-router-dom';



class FilterForm extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      ctype: this.props.ctype 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateFilter("ctype", this.state.ctype);
    this.props.history.push("/searchResults");
  }

    componentDidMount(){
      this.props.updateFilter("ctype", this.state.ctype);
    }

  render(){
    return(
        <form onSubmit={this.handleSubmit} className="search-form">
            <select
                  value={this.state.ctype}
                  onChange={this.update("ctype")}
                  className="type-input"
                >
                <option value="" key="10088"  disabled>Course Type</option>
                <option value="All" key="10086">All</option>
                {COURSE_TYPES.map((type, i) => {
                  return (
                  <option value={type} key={i}>
                  {type}
                  </option>
                  );
                })}
            </select>

          <input type="submit" value="Search" className="btn btn-search"/>
        </form>
        
    )
  }
}

export default withRouter(FilterForm);

