import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ ctype, updateFilter }) => (
  <div>
    <br></br>
    <label>Course Type</label>
      <input
        type="text"
        value={ctype}
        placeholder="Type a type you like"
        onChange={handleChange('ctype', updateFilter)}
      />

    <br></br>
    <br></br>

  </div>
);

export default FilterForm;

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
