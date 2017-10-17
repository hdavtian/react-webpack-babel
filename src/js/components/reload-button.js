import React from 'react';

const ReloadButton = (props) => {
  return (
    <div className="load-json" onClick={()=>{props.onClickHandler()}}>
      <span className='glyphicon glyphicon-import'></span>
      <span>Re-load movie list</span>
    </div>
  )
};

export default ReloadButton;
