import React from "react";
import ListContainer from "../../components/List";

import { connect } from "react-redux";

class ListPage extends React.Component {
  render() {
    const { lists } = this.props
    return (
      <div>
          <div style={styles.listContainers}>{ lists.map((list,i) => {
            return <ListContainer key={i} title={list.title} cards={list.cards}></ListContainer>
        })}</div>
        
      </div>
    );
  }
}

const styles = {
    listContainers : {
        display: "flex",
        flexDirection: "row"
    }
}

const mapStateToProps = state => ({
  lists : state.lists
});

export default connect (mapStateToProps) (ListPage);
