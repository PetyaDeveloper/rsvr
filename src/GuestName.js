import React from 'react';
import PropTypes from 'prop-types';

const GuestName = props =>{
    // console.log(props.children);
    if(props.isEditing){
      return (
          <input type="text" value={props.children}
                 onChange={props.handleNameEdits} />
      );
    }
    return <span>{props.children}</span>
}

GuestName.propTypes={
    isEditing: PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired
}

export default GuestName;