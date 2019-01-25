import React, { Component } from 'react'
import ReactDom from 'react-dom'

import AppHeader from './components/app-header/app-header'
import TodoList from './components/todo-list/todo-list'
import SearchPanel from './components/search-panel/search-panel'
import ItemStatus from './components/item-status-filter/item-status-filter'
import './index.css'
export default class App extends Component {
    
    state = {
        todoData: [
            { label: 'Drink Coffee' , important: false ,id:'23'},
            { label: 'Clean room' , important: true, id:'43'},
            { label: 'Learn react' , important: true, id:'45'},
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            //todoData.splice(idx,1); //нельзя изменять существующий state!!!!!
            //теперь нужно сделать так чтобы state не изменялся на прямую, так как это приводит к неразберихи в других модулях
            // создаем два массива до и за удаленым индексом, а потом соединяем их с помощью spread оператора
            // const before = todoData.slice(0,idx);
            // const after = todoData.slice(idx + 1);
            // const newArray = [...before, ...after]
            const newArray = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx + 1)
            ];


            return {
                todoData: newArray
            }

        })
    }

    render() {
        return (
        <div className="todo-app">
            <AppHeader toDo={1} done={2}/> 
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatus />
            </div>
            <TodoList 
            todos={this.state.todoData}
            onDeleted={ (id) => this.deleteItem(id)} 
            />
        </div>
        )
    }
}
    
ReactDom.render(<App/>, document.getElementById("root"))