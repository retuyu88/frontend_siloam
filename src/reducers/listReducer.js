// import List from "../components/List";
import { CONSTANTS } from "../_constants";

let listID = 2;
let cardID = 4

const initialState = [
  {
    title: "Ongoing",
    id: 0,
    cards: [
      {
        id: 0,
        name: " redesign page",

      },
      {
        id: 1,
        name: " redesign page",
      },
      {
        id: 2,
        name: " redesign page",
      },
      {
        id: 3,
        name: " redesign page",
      },
    ],
  },
  {
    title: "Process",
    id: 1,
    cards: [
      {
        id: 0,
        name: " redesign page",
      },
    ],
  },
  {
    title: "Stagging",
    id: 2,
    cards: [
      {
        id: 0,
        name: " redesign page",
      },
    ],
  },
  {
    title: "Production",
    id: 3,
    cards: [
      {
        id: 0,
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
