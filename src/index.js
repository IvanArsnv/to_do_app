import React from 'react'
import ReactDom from 'react-dom'

import AppHeader from './components/app-header/app-header'
import TodoList from './components/todo-list/todo-list'
import SearchPanel from './components/search-panel/search-panel'
import ItemStatus from './components/item-status-filter/item-status-filter'
import './index.css'
const App = () => {
    
    const todoData = [
        { label: 'Drink Coffee' , important: false ,id:'23'},
        { label: 'Clean room' , important: true, id:'43'},
        { label: 'Learn react' , important: true, id:'45'},
    ];
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={2}/> 
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatus />
            </div>
            <TodoList todo={todoData} />
        </div>
)
}
ReactDom.render(<App/>, document.getElementById("root"))