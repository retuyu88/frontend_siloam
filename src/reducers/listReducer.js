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

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID,
      };
      listID += 1;
      return [...state, newList];

      case CONSTANTS.ADD_CARD:
          const newCard = {
              text : action.payload.text,
              id : cardID
          }
          cardID += 1;
          state.map(list => {
              if(list.id === action.payload.id){
                return {
                    ...list,
                    cards : [...list.cards, newCard]
                }
              }else {
                  return list;
              }
          })
          break;
    default:
      return state;
  }
};

export default listsReducer;
