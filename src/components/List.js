import React, {useState} from 'react';
import ListCard from './ListCard';
import ActionButton from "./ActionButton";
import './List.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect,useDispatch } from "react-redux";
import { listActions } from "../_actions";
import { addList } from '../_actions/listActions';

const ListContainer = ({ title, cards ,id}) => {
    const [text] = useState(0);
    function getModalStyle() {
        const top = 50;
        const left = 50;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      };
      
 

      const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const HandleAddList = () => {
    const dispatch = useDispatch()
    if (text){
      dispatch(addList(text))
    }
    return
  };
 
  const body = (
    <div style={modalStyle} className={classes.paper}>
    <span style={styles.modalTitle}>Create Task</span>
    <span style={styles.modalSubTitle}>Task Name</span>
    <input style={styles.modalInput1}></input>
    <p style={styles.modalSubTitle}>Progress</p>
    <input style={styles.modalInput2}></input>
    <div style={styles.buttonContainer}>
          <button style={styles.buttonCancel}>Cancel</button>
          <button onMouseDown = {HandleAddList} style={styles.buttonSave}>Save Task</button>
      </div>
  </div>
  );
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                <div style={styles.taskContainer}><span style={styles.task}>Group Task {id}</span></div>
                <div style={styles.dateContainer}><span style={styles.date}>January- March</span></div>
            </div>
            { cards.map((card,i) => {
              return  <ListCard key={i} text={card.name}></ListCard>
            })}
            
            <button style={styles.invisButton} onClick={handleOpen}>
            <ActionButton></ActionButton>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
        
        </div>
    )
}

const styles = {
    container:{
        backgroundColor: "#FFF9FB",
        borderWidth:1,
        borderStyle: 'solid',
        borderColor: "#EB2F96",
        borderRadius: 8,
        minWidth: 300,
        padding: 8,
        marginRight: 16,
        height : 'fit-content'
    },
    title :{

    },
    invisButton : {
        background: 'transparent',
        border: 'none'
    },
    taskContainer : {
        marginBottom: 4,
    },
    dateContainer : {
        marginBottom: 8,
    },
    task :{
        backgroundColor: "#FFF0F6",
        border: '1px solid #FFADD2',
        padding : '1px 8px 1px 8px',
        color : '#EB2F96',
        fontSize : '12px',
        lineHeight : '20px',
    },
    date : {
        color: '#2F3136',
        fontWeight: 'bolder',
        fontStyle: 'normal',    
        lineHeight: '20px',
        fontSize: '12px'
    },
    modalTitle : {
        fontSize : '16px',
        marginBottom : '20px',
      },
      modalSubTitle : {
        fontSize: '12px',
        lineHeight : '16px',
        margin : '4px 0px',
        color : '#5D6372'
      },
      modalInput1 : {
          minWidth : '500px',
          height : '39px',
          fontSize : '14px',
          padding : '10px',
          border: '1px solid #E5E5E5',
          borderRadius : '4px',
          margin : '4px 0px'
      },
      modalInput2 : {
        width : '99px',
          height : '39px',
          fontSize : '14px',
          padding : '10px',
          border: '1px solid #E5E5E5',
          borderRadius : '4px',
          margin : '4px 0px'
      },
      buttonContainer :{
        marginTop : '50px',
        display: 'flex',
        justifyContent : 'flex-end'
      },
      buttonSave: {
        width : '77px',
        height: '32px',
        backgroundColor : '#27AE60',
        border : '1px solid #27AE60',
        color : '#FFFFFF',
        marginLeft : '8px'
      },
      buttonCancel : {
        width : '77px',
        height: '32px',
        backgroundColor : '#FFFFFF',
        border : '1px solid #D9D9D9'
      }
}
const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
      display:'flex',
      flexDirection: 'column',
      paddingLeft: 0,
      paddingRight:0
    },
    buttonNav: {
      background: 'white',
      border: 'none',
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'flex-start',
      textTransform : 'none'
    },
    paper: {
      position: "absolute",
      minWidth: 560,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

  const mapStateToProps = (state) => ({
    lists: state.lists,
  });

export default connect ()(ListContainer);