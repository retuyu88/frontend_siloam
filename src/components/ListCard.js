import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Delete from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
// import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Popover } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { deleteSubList,editSubProducts } from "../_actions/listActions";
import { userService } from "../services";
import ProgressBar from "./progressBar";

const ListCard = ({ data, index, real,cardId }) => {

  // console.log("index",index)
  
  //   function rand() {
  //     return Math.round(Math.random() * 20) - 10;
  //   }
  const [name, setName] = useState(data.name);
  // const [target, setTarget] = useState(data.todo_id);
  // console.log('target first',target,data.todo_id)
  const [percentage, setPercentage] = useState(0);

  const dispatch = useDispatch();
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
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  //   const handleClick = () => {
  //     dispatch(logout());
  // }
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange2 = (event) => {
    setPercentage(event.target.value);
  };

  const handleChangeLeft = () => {
    
    const a = real.findIndex(p => p.id === data.todo_id)
    // setTarget(2)
    // console.log('here',data.todo_id ,data,real)
    // console.log('INI',target)
    // console.log("index before ",real[a-1].id)
    
    editCard(real[a-1].id)
  };
  const handleChangeRight = () => {
    const a = real.findIndex(p => p.id === data.todo_id)
    // setTarget(2)
    // console.log('here',data.todo_id ,data,real)
    // console.log('INI',target)
    // console.log("index before ",real[a+1].id)
    
    editCard(real[a+1].id)

  };
  const deleteCard = () => {
    userService
      .deleteList(data.id, data.todo_id)
      .then((res) => res)
      .then((result) => dispatch(deleteSubList(data.id)))
      .catch((err) => console.log("error", err));
    handleClose();
  };
  const handleEdit= () =>{
   
    editCard(data.todo_id)
  }
  const editCard = (s) => {
    // console.log('target',target,data.todo_id)

    userService
      .editList(data.id, data.todo_id, s, name,percentage)
      .then((res) => res)
      .then((result) => dispatch(editSubProducts(result)))
      .catch((err) => console.log("error", err));
    handleClose();
  };

  const handleModalClose = () => {
    setOpen(false);
  };
  const handleModalDeleteClose = () => {
    setOpenDelete(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <span style={styles.modalTitle}>Edit Task</span>
      <span style={styles.modalSubTitle}>Task Name</span>
      <input
        style={styles.modalInput1}
        value={name}
        onChange={handleChange}
      ></input>
      <p style={styles.modalSubTitle}>Progress</p>
      <input
        style={styles.modalInput2}
        value={percentage}
        onChange={handleChange2}
      ></input>
      <div style={styles.buttonContainer}>
        <button onClick={handleModalClose} style={styles.buttonCancel}>
          Cancel
        </button>
        <button style={styles.buttonSave} onClick={handleEdit}>
          Save Task
        </button>
      </div>
    </div>
  );
  const bodyDelete = (
    <div style={modalStyle} className={classes.paperdelete}>
      <span style={styles.modalTitleDelete}>Delete Task</span>
      <span style={styles.modalSubTitleDelete}>
        Are you sure want to delete this task ? <br />
        your action can't be reverted
      </span>

      <div style={styles.buttonContainer}>
        <button onClick={handleModalDeleteClose} style={styles.buttonCancel}>
          Cancel
        </button>
        <button style={styles.buttonDelete} onClick={deleteCard}>
          Delete
        </button>
      </div>
    </div>
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [openModal, setOpen] = React.useState(false);
  const [openModalDelete, setOpenDelete] = React.useState(false);
  return (
    <Draggable draggableId={String(cardId)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card style={styles.cardContainer}>
            <CardContent>
              <Typography style={styles.task} gutterBottom>
                {data.name}
              </Typography>
              <div>
                <div style={styles.bottom}>
                 
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                  <ProgressBar completed={data.progress_percentage} />
                  <MoreHoriz onClick={handleClick}></MoreHoriz>
                  </div>
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
              { index !== 0 &&  <Button  onMouseDown={handleChangeLeft} className={classes.buttonNav}>
                     <ArrowBackIcon
                      
                     ></ArrowBackIcon>
                     Move Left
                   </Button> }
                    
                   { index !== 3&& 
                     <Button  onMouseDown={handleChangeRight} className={classes.buttonNav}>
                       <ArrowForwardIcon
                        
                       ></ArrowForwardIcon>
                       Move Right
                     </Button>
}
                      
                      <Button
                        className={classes.buttonNav}
                        onClick={handleOpen}
                      >
                        <EditIcon></EditIcon>Edit
                      </Button>
                      <Button
                        className={classes.buttonNav}
                        onClick={handleOpenDelete}
                      >
                        <Delete></Delete>Delete
                      </Button>

                      <Modal
                        open={openModal}
                        onClose={handleModalClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        {body}
                      </Modal>
                      <Modal
                        open={openModalDelete}
                        onClose={handleModalDeleteClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        {bodyDelete}
                      </Modal>
                    </Typography>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
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
  modalTitle: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  modalTitleDelete: {
    fontSize: "16px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  modalSubTitle: {
    fontSize: "12px",
    lineHeight: "16px",
    margin: "4px 0px",
    color: "#5D6372",
  },
  modalSubTitleDelete: {
    fontSize: "14px",
    lineHeight: "16px",
    margin: "4px 0px",
    color: "#262626",
  },
  modalInput1: {
    minWidth: "500px",
    height: "39px",
    fontSize: "14px",
    padding: "10px",
    border: "1px solid #E5E5E5",
    borderRadius: "4px",
    margin: "4px 0px",
  },
  modalInput2: {
    width: "99px",
    height: "39px",
    fontSize: "14px",
    padding: "10px",
    border: "1px solid #E5E5E5",
    borderRadius: "4px",
    margin: "4px 0px",
  },
  buttonContainer: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonSave: {
    width: "77px",
    height: "32px",
    backgroundColor: "#27AE60",
    border: "1px solid #27AE60",
    color: "#FFFFFF",
    marginLeft: "8px",
    borderRadius: "2px",
  },
  buttonDelete: {
    width: "77px",
    height: "32px",
    backgroundColor: "#EB5757",
    border: "1px solid #EB5757",
    color: "#FFFFFF",
    marginLeft: "8px",
    borderRadius: "2px",
  },
  buttonCancel: {
    width: "77px",
    height: "32px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #D9D9D9",
    borderRadius: "2px",
  },
};

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    paddingLeft: 0,
    width: "138px",
    paddingRight: 0,
  },
  buttonNav: {
    background: "white",
    border: "none",
    display: "flex",
    alignItem: "center",
    justifyContent: "flex-start",
    textTransform: "none",
    "&:hover": {
      background: "#F5F0FC",
      color: "#5E20B3",
    },
  },
  paper: {
    position: "absolute",
    minWidth: 560,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paperdelete: {
    position: "absolute",
    minWidth: 400,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #FFFFFF",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default ListCard;
