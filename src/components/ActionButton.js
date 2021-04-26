import React from "react"
import OutlineIcon from "@material-ui/icons/AddCircleOutline";

class ActionButton extends React.Component{
    renderAddButton = () => {
        // const {list} = this.props

        // const buttonText = list ? "New Group" : "New Task"
        return (
            <div>
                <OutlineIcon></OutlineIcon>
                <p>New Task</p>
            </div>
        );
      
    }
    render() {
        return this.renderAddButton();
    }
}

export default ActionButton