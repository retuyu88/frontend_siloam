import React from 'react';
import ListCard from './ListCard';
import ActionButton from "./ActionButton";
import './List.css'

const ListContainer = ({ title, cards }) => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                <div style={styles.taskContainer}><span style={styles.task}>Group Task</span></div>
                <div style={styles.dateContainer}><span style={styles.date}>January- March</span></div>
            </div>
            { cards.map((card,i) => {
              return  <ListCard key={i} text={card.name}></ListCard>
            })}
            <ActionButton></ActionButton>
        
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