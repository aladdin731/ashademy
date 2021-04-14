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
      if(!this.state.ctype) {
        this.props.updateFilter("ctype", "All");
      }else {
        this.props.updateFilter("ctype", this.state.ctype);
      }
    }

  render(){
    return(
        <form onSubmit={this.handleSubmit} className="search-form">
            <select
                  value={this.state.ctype}
                  onChange={this.update("ctype")}
                  className="type-input"
                >
                <option value="" key="10088" selected disabled>Course Type</option>
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

// const FilterForm = ({ ctype, updateFilter }) => (
//   <div>
//     <br></br>
//     <form>
//        <label>Course Type
//         <input
//           type="text"
//           value={ctype}
//           placeholder="Type a type you like"
//           onChange={handleChange('ctype', updateFilter)}
//         />
//        </label>
//        <input type="submit">Search</input>
     
//     </form>

//     <br></br>
//     <br></br>

//   </div>
// );



    // <form>

    // </form>


            //     <input
            //   type="text"
            //   value={this.state.ctype}
            //   onChange={this.update("ctype")}
            //   placeholder="Course Type"
            //   className="type-input"
            // />