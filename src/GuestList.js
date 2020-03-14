import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>

<ul>
{props.guests
    .filter(g => !props.isFiltered ||  g.isConfirmed)
    .map((g,i)=>
  <Guest key={i}
         name={g.name}
         isConfirmed={g.isConfirmed}
         isEditing={g.isEditing}
         handleConfirmation={()=>props.toggleConfirmationAt(i)}
         handleToggleEditing={()=>props.toggleEditingAt(i)}
         setName={text=>props.setNameAt(text,i)}
 />
)}
</ul>;

GuestList.propTypes={
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt:PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired
    // isEditing: PropTypes.bool.isRequired
}

export default GuestList;