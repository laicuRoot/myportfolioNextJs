import React from 'react';

export default function ProgressBar(props) {
  const { bgcolor, completed, icon, style } = props;
  
  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  };

  const labelStyles = {
    padding: 5,
    color: 'orange',
    fontWeight: 'bold'
  };

  return (
    <div className='h-8 w-full bg-gray-400 rounded-lg m-1'>
      <div style={fillerStyles} className='fillerStyle'>
        <i className={`${icon} text-left`}></i>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
}