import React from 'react';

const IndexPage = () => {

  return(
    <select onChange={e => console.log(e)}>
      <option selected="selected" value="user" data-type="enum">User</option>
      <option value="HQ center" data-type="text">HQ Center</option>
      <option value="business unit" data-type="boolean">Business Unit</option>
      <option value="note" data-type="date">Try on </option>
      <option value="con" data-type="number">Con</option>
    </select>
  )
}

export default IndexPage;