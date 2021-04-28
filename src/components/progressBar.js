import React from "react";

const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: '10px',
      width: '150px',
      backgroundColor: "#e0e0de",
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    //   margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed }%`,
      backgroundColor: '#1890FF',
      borderRadius: 'inherit',
      textAlign: 'center'
    }
  
    const labelStyles = {
      padding: 0,
      color: 'black',
      fontWeight: 'bold',
      marginLeft : '20px'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
         
        </div>
        <span style={labelStyles}>{completed}</span>
      </div>
      
    );
  };
  
export default ProgressBar;