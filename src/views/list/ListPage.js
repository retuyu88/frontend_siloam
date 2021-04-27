import React from "react";
import ListContainer from "../../components/List";
import logo from "../../assets/logo.png";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { userService } from "../../services";
// import {lists} from "../../reducers";
import { userService } from "../../services";

import fetchListActions from "../../_actions/listActions";

import { getLists,getListsError,getListsPending,getSubLists} from "../../reducers/listReducer";


class ListPage extends React.Component {
  onDragEnd = (result) => {
    //reordering logic
    const { destination, source, draggableId} = result
    
    if (!destination){
      return
    }

  }
  componentWillMount(){
    const {fetchList} = this.props
    fetchList()
  
  
  }
  getEveryList(id){
    const val = userService.getItemList(id)
    return val

  }
  shouldComponentRender() {
    const {pending} = this.props;
    if(this.pending === false) return false;
    // more tests
    return true;
}
  render() {
    const {lists} = this.props;
    if(!this.shouldComponentRender()) return <CircularProgress />
    
    
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div style={styles.listPage}>
        <div style={styles.leftpanel}><img style={styles.leftpanelimage} src={logo} alt="Logo" />;</div>
        <div style={styles.rightpanel}>
          <div style={styles.mainTitle}>Product Roadmap</div>
          <div style={styles.listContainers}>
            {lists.map((list, i) => 
                (
                  <ListContainer
                    key={list.id}
                    data = {list}
                    listId = {i}
                  ></ListContainer>
                )

            )}
            
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
      </DragDropContext>
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
mainTitle : {
  fontSize : '20px',
  fontWeight : '500',
  marginTop : '20px',
  marginBottom : '24px',
  lineHeight: '24px',
  color : '#2F3136  '
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
    padding: '1%'
  },
  leftpanelimage: {
    marginTop: '20px'
  },
  rightpanel: {
    marginRight: "50px",
    marginLeft: "50px",
  },
};

const mapStateToProps = (state) => ({
  error: getListsError(state),
  lists: getLists(state),
  pending: getListsPending(state),
  subLists : getSubLists(state)

});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchList : fetchListActions
}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(ListPage);
