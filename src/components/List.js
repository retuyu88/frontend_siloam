import React from 'react';
import ListCard from './ListCard';
import './List.css'

const ListContainer = ({ title, cards }) => {
    return (
        <div style={styles.container}>
            <h2>{title}</h2>
            
                <ListCard />
            { cards.map((card,i) => {
              return  <ListCard key={i} text={card.name}></ListCard>
            })}
        
        </div>
    )
}

const styles = {
    container:{
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8,
    }
}

export default ListContainer;