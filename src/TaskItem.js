import React from 'react';
import FlipMove from 'react-flip-move';
class TaskItem extends React.Component {
    constructor() {
        super();
        
    }
    
    render(){
        let items = this.props.items
        let listItem = items.map(item => {
            return(
                <div className="list-group" key={item.key}> 
                <li className={item.finish
                                ? "mt-4 p-2 list-group-item list-group-item-success"
                                : "mt-4 p-2 list-group-item"}>
                    {item.text}

                    <i  className="mr-4 mt-1 fas fa-calendar-times float-right" 
                        style={{cursor:'pointer', color:'red'}}
                        onClick={() => {this.props.deleteItem(item.key)}}></i>

                    <i  className="mr-4 mt-1 fas fa-calendar-check float-right" 
                        style={{cursor:'pointer', color:'green'}}
                        onClick={() => this.props.finishItem(item)}></i>
                </li>
                </div>
            )
        })
        return(
            <div>
                <FlipMove duration={500} easing="ease-in-out">
                    {listItem}
                </FlipMove>
            </div>
        );
    };
}

export default TaskItem;