// import React, { useState } from "react";
import React,{useState} from "react";
import ActionButton from "./ActionButton";
import "./List.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect,useDispatch,useSelector} from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import { userService } from "../services";
import  ListCard  from "./ListCard";
import { setSubProducts } from "../_actions/listActions";
// import { addSubList } from "../_actions/listActions";


const ListContainer = ({ data, listId }) => {
// console.log('listID',listId)
   const dispatch = useDispatch()
  //  const [subData, setCount] = useState([]);
   const[name, setName] = useState("");
 const [percentage, setPercentage] = useState(0);

  //  const effect = useEffect()

  //  useEffect(() => {
  //   userService.getItemList(data.id).then((res) => {
  //     // console.log("res",res)
  //     setCount(res)
  //     dispatch(setSubProducts(res))})
    
  // }, [data.id,dispatch])
  const listSub = useSelector(state => state.listsReducer.subProducts);
  var subLists = listSub.filter(res=>
      res.todo_id === data.id
  )
  // console.log('listsub',data.id,subLists)



  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

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

  //   const HandleAddList = () => {
  //     const dispatch = useDispatch();
  //     if (text) {
  //       dispatch(addList(text));
  //     }
  //     return;
  //   };
  const handleSubmit = (event) => {
    // event.preventDefault()
    add()
    
  }
  const handleChange = event => {
    setName(event.target.value)
    }
    const handleChange2 = event => {
      setPercentage(event.target.value)
      }
 
  const add = () => {
    userService.postItemList(data.id,name,percentage)
      .then((res) => res)
      .then((result) => dispatch(setSubProducts(result)))
      .catch((err) => console.log('error',err))
      handleClose()
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <span style={styles.modalTitle}>Create Task</span>
      <span style={styles.modalSubTitle}>Task Name</span>
      <input style={styles.modalInput1} value = {name} onChange = {handleChange}></input>
      <p style={styles.modalSubTitle}>Progress</p>
      <input style={styles.modalInput2} value = {percentage} onChange = {handleChange2}></input>
      <div style={styles.buttonContainer}>
        <button style={styles.buttonCancel}>Cancel</button>
        <button style={styles.buttonSave} onClick={handleSubmit}>
          Save Task
        </button>
      </div>
    </div>
  );
  
  return (
    <Droppable droppableId={String(listId)}>
      {(provided) => (
        <div 
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={
            listId === 0
              ? styles.container1
              : listId === 1
              ? styles.container2
              : listId === 2
              ? styles.container3
              : styles.container4
          }
        >
          <div style={styles.title}>
            <div style={styles.taskContainer}>
              <span
                style={
                  listId === 0
                    ? styles.task1
                    : listId === 1
                    ? styles.task2
                    : listId === 2
                    ? styles.task3
                    : styles.task4
                }
              >
                {data.title}
              </span>
            </div>
            <div style={styles.dateContainer}>
              <span style={styles.date}>
                {data.description}
              </span>
            </div>
          </div>
          {subLists.map((card, index) => (
            
              <ListCard
                key={index}
                index={listId}
                data={card}
                cardId={card.id}
              ></ListCard>
            
          ))}

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
          {provided.placeholder}
        </div>
  )}
    </Droppable>
  );
};

const styles = {
  container1: {
    backgroundColor: "#FFF9FB",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#EB2F96",
    borderRadius: 8,
    minWidth: 300,
    padding: 8,
    marginRight: 16,
    height: "fit-content",
  },
  container2: {
    backgroundColor: "#FCFAFD",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#7B61FF",
    borderRadius: 8,
    minWidth: 300,
    padding: 8,
    marginRight: 16,
    height: "fit-content",
  },
  container3: {
    backgroundColor: "#F7FAFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2F54EB",
    borderRadius: 8,
    minWidth: 300,
    padding: 8,
    marginRight: 16,
    height: "fit-content",
  },
  container4: {
    backgroundColor: "#F8FEF1",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#52C41A",
    borderRadius: 8,
    minWidth: 300,
    padding: 8,
    marginRight: 16,
    height: "fit-content",
  },
  title: {},
  invisButton: {
    marginTop: "10px",
    background: "transparent",
    border: "none",
  },
  taskContainer: {
    marginBottom: 4,
  },
  dateContainer: {
    marginBottom: 8,
  },
  task1: {
    backgroundColor: "#FFF0F6",
    border: "1px solid #FFADD2",
    padding: "1px 8px 1px 8px",
    color: "#EB2F96",
    fontSize: "12px",
    lineHeight: "20px",
  },
  task2: {
    backgroundColor: "#F9F0FF",
    border: "1px solid #D3ADF7",
    padding: "1px 8px 1px 8px",
    color: "#7B61FF",
    fontSize: "12px",
    lineHeight: "20px",
  },
  task3: {
    backgroundColor: "#F0F5FF",
    border: "1px solid #ADC6FF",
    padding: "1px 8px 1px 8px",
    color: "#2F54EB",
    fontSize: "12px",
    lineHeight: "20px",
  },
  task4: {
    backgroundColor: "#F6FFED",
    border: "1px solid #B7EB8F",
    padding: "1px 8px 1px 8px",
    color: "#52C41A",
    fontSize: "12px",
    lineHeight: "20px",
  },
  date: {
    color: "#2F3136",
    fontWeight: "bolder",
    fontStyle: "normal",
    lineHeight: "20px",
    fontSize: "12px",
  },
  modalTitle: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  modalSubTitle: {
    fontSize: "12px",
    lineHeight: "16px",
    margin: "4px 0px",
    color: "#5D6372",
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
    paddingRight: 0,
  },
  buttonNav: {
    background: "white",
    border: "none",
    display: "flex",
    alignItem: "center",
    justifyContent: "flex-start",
    textTransform: "none",
  },
  paper: {
    position: "absolute",
    minWidth: 560,
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

// const mapStateToProps = (state) => ({
//   lists: state.lists,
// });

export default connect()(ListContainer);
