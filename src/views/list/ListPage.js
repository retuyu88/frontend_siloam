import React from "react";
import ListContainer from "../../components/List";

import { connect } from "react-redux";

class ListPage extends React.Component {
  render() {
    const { lists } = this.props;
    return (
      <div style={styles.listPage}>
        <div style={styles.leftpanel}>Logo</div>
        <div style={styles.rightpanel}>
          <div>Product Roadmap</div>
          <div style={styles.listContainers}>
            {lists.map((list, i) => {
              return (
                <ListContainer
                  key={i}
                  title={list.title}
                  cards={list.cards}
                  id = {list.id}
                ></ListContainer>
              );
            })}
{/*             
            <ListContainer style={styles.container,styles.container1}
              title={lists[0].title}
              cards={lists[0].cards}
            ></ListContainer>
            <ListContainer style={styles.container,styles.container2}
              title={lists[1].title}
              cards={lists[1].cards}
            ></ListContainer>
            <ListContainer style={styles.container,styles.container3}
              title={lists[2].title}
              cards={lists[2].cards}
            ></ListContainer>
            <ListContainer style={styles.container,styles.container4}
              title={lists[3].title}
              cards={lists[3].cards}
            ></ListContainer> */}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  listContainers: {
    display: "flex",
    flexDirection: "row",
  },
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
  container1 : {
    
  },
  container2 :{

  },
  container3 : {

  },
  container4 : {

  },
  listPage: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  leftpanel: {
    background: "black",
    width: "5%",
  },
  rightpanel: {
    marginRight: "50px",
    marginLeft: "50px",
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(ListPage);
