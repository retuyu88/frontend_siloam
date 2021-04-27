// import List from "../components/List";
import { CONSTANTS } from "../_constants";

let listID = 2;
let cardID = 4

const initialState = [
  {
    title: "Ongoing",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        name: " redesign page",

      },
      {
        id: `card-${1}`,
        name: " redesign page",
      },
      {
        id: `card-${2}`,
        name: " redesign page",
      },
      {
        id: `card-${3}`,
        name: " redesign page",
      },
    ],
  },
  {
    title: "Process",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${0}`,
        name: " redesign page",
      },
    ],
  },
  {
    title: "Stagging",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${0}`,
        name: " redesign page",
      },
    ],
  },
  {
    title: "Production",
    id: `list-${3}`,
    cards: [
      {
        id: `card-${0}`,
        name: " redesign page",
      },
    ],
  },
];


const listsReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case CONSTANTS.SET_LIST:
      return state
  
    default:
      return state;
  }
};



export default listsReducer;
