import React, { Component } from 'react'
import ReactDom from 'react-dom'

import AppHeader from './components/app-header/app-header'
import TodoList from './components/todo-list/todo-list'
import SearchPanel from './components/search-panel/search-panel'
import ItemStatus from './components/item-status-filter/item-status-filter'
import AddItem from './components/add-item/add-item'
import './index.css'


export default class App extends Component {
    
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Clean'),
            this.createTodoItem('Coffee')   
        ]
    };
    

    createTodoItem(label) {
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * Math.floor(max));
        }
        return {
            label: label,
            important: false,
            id: getRandomInt(150)   
        }
    }
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
    
      
    addItem = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData, newItem
            ];

            return {
                todoData: newArray
            };
        })
        
    }
    toggleProperty(arr, id, propName ) {
        const idx = arr.findIndex((el) => el.id === id);
        // 1. update object
        const oldItem = arr[idx];
        const newItem = {...oldItem,
         [propName]: !oldItem[propName] }

        // 2. construct new array
       return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
        ];
    
    }
    onToggleImportant = (id) => {
        this.setState(({ todoData }) =>{  
            return {
                todoData: this.toggleProperty(todoData, id , 'important')
            } 
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) =>{  
            return {
                todoData: this.toggleProperty(todoData, id , 'done')
            } 
        })
    }

    render() {
        const { todoData} = this.state; // to remove this.state
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
        <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/> 
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatus />
            </div>
            <TodoList 
            todos={todoData}
            onDeleted={ (id) => this.deleteItem(id)} 
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            />
            <AddItem onAdded={this.addItem}/>
        </div>
        )
    }
}
    
ReactDom.render(<App/>, document.getElementById("root"))