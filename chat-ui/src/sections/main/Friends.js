import React from 'react'

const Friends = ({ open, handleClose }) => {

     const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>Friends</div>
  )
}

export default Friends