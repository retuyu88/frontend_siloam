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
                ></ListContainer>
              );
            })}
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
  listPage: {
    display: "flex",
    flexDirection: "row",
    height: '100vh'
  },
  leftpanel: {
    background: "black",
    width : '5%'
  },
  rightpanel: {
    marginRight: '50px',
    marginLeft : '50px'
  }
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(ListPage);
