import React from 'react';
import ListCard from './ListCard';
import ActionButton from "./ActionButton";
import './List.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const ListContainer = ({ title, cards ,id}) => {
    function getModalStyle() {
        const top = 50;
        const left = 50;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      };
      const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));

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
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      {/* <SimpleModal /> */}
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
    }
}

export default ListContainer;