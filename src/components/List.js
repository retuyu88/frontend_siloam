import React from 'react';
import ListCard from './ListCard';
import './List.css'

const ListContainer = ({ title, cards }) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            
                <ListCard />
            { cards.map(card => {
              return  <ListCard text={card.name}></ListCard>
            })}
        
        </div>
    )
}

const styles = {
    container:{
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300
    }
}

export default ListContainer;