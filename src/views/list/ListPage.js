import React from "react";
import ListContainer from "../../components/List";

import { connect } from "react-redux";

class ListPage extends React.Component {
  render() {
    const { lists } = this.props
    return (
      <div>
        { lists.map(list => {
            return <ListContainer title={list.title} cards={list.cards}></ListContainer>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists : state.lists
});

export default connect (mapStateToProps) (ListPage);
