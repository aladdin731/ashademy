import React from 'react';
import { withRouter } from 'react-router-dom';

// const handleChange = (filter, updateFilter) => e => (
//   updateFilter(filter, e.currentTarget.value)
// );

class FilterForm extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      ctype:""
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

  render(){
    const { ctype } = this.props;
    return(
      <div>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>Course Type
            <input
              type="text"
              value={this.state.ctype}
              onChange={this.update("ctype")}
            />
          </label>
          <input type="submit" value="Search"/>
        
        </form>

      </div>
    )
  }
}

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

export default withRouter(FilterForm);

    // <form>
    //   <select
    //         value={ctype}
    //         onChange={handleChange('ctype', updateFilter)}

    //       >
    //       <option value={ctype} key="10086">
    //         All
    //         </option>
    //       {COURSE_TYPES.map((type, i) => {
    //         return (
    //         <option value={ctype} key={i}>
    //         {type}
    //         </option>
    //         );
    //       })}
    //   </select>
    // </form>
