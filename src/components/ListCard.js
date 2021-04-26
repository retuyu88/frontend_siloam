import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Delete from "@material-ui/icons/Delete";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EditIcon from '@material-ui/icons/Edit';
import Modal from "@material-ui/core/Modal";
// import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Popover } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const ListCard = ({ text }) => {
//   function rand() {
//     return Math.round(Math.random() * 20) - 10;
//   }

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <span style={styles.modalTitle}>Edit Task</span>
      <span style={styles.modalSubTitle}>Task Name</span>
      <input style={styles.modalInput1}></input>
      <p style={styles.modalSubTitle}>Progress</p>
      <input style={styles.modalInput2}></input>
      <div style={styles.buttonContainer}>
          <button style={styles.buttonCancel}>Cancel</button>
          <button style={styles.buttonSave}>Save Task</button>
      </div>
    </div>
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [openModal, setOpen] = React.useState(false);
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography style={styles.task} gutterBottom>
          {text}
        </Typography>
        <div>
          <div style={styles.bottom}>
            <div style={styles.meter}>
              <span style={styles.fill}></span>
            </div>
            <MoreHoriz onClick={handleClick}></MoreHoriz>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes.typography}>
                <Button className={classes.buttonNav}><ArrowBackIcon></ArrowBackIcon>Move Left</Button>
                <Button className={classes.buttonNav}><ArrowForwardIcon></ArrowForwardIcon>Move Right</Button>
                <Button className={classes.buttonNav} onClick={handleOpen}>
                  <EditIcon></EditIcon>Edit
                </Button>
                <Button className={classes.buttonNav}><Delete></Delete>Delete</Button>
                
                <Modal
                  open={openModal}
                  onClose={handleModalClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body}
                </Modal>
              </Typography>
            </Popover>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
  
  task: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#2F3136",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
  },
  meter: {
    position: "relative",
    background: "#555",
    height: "20px",
  },
  fill: {
    width: "25%",
    background: "#52C41A",
    height: "100%",
    position: "relative",
    display: "block",
    backgroundImage: "red",
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
};

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

export default ListCard;
