import e from 'cors';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {FaEdit} from 'react-icons/fa'
import { AiFillDelete } from "react-icons/ai";


function YourTask() {
    const [todo,setTodo] = useState("")
    const [todos,setTodos] = useState([])
    const [ShowFinish,setShowFinish] = useState(true)

    useEffect(()=>{
        let todoString = localStorage.getItem("ToDo")
        if(todoString){
            let todos = JSON.parse(localStorage.getItem('ToDo'))
            setTodos(todos)
        }
    },[])
    const saveToLS = (params)=>{
        localStorage.setItem("ToDo", JSON.stringify(todos))
    }

    // const ToggleFinish =()=>{

    // }

    const HandleEdit = (e,id)=>{
        let t = todos.filter(item=>item.id === id)
        setTodo(t[0].todo)
        let newTodos = todos.filter(item=>{
            return item.id!==id
        });
        setTodos(newTodos)
        saveToLS();
    }
    const HandleDelete = (e,id)=>{
        console.log(`The id is: ${id}`)
        let index = todos.findIndex(item=>{
            return item.id === id;
        })
        console.log(`The Index is: ${index}`)
        let newTodos = todos.filter(item=>{
            return item.id!==id
        });
        setTodos(newTodos)
        saveToLS();
    }
    const HandleAdd = ()=>{
        setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
        setTodo("")
        saveToLS();
    }
    const HandleChange = (e)=>{
        setTodo(e.target.value);
    }
    const HandleCheckbox = (e)=>{
        // console.log(e,e.target)
        let id = e.target.name;
        console.log(`The Id is:  ${id}`)
        let index = todos.findIndex(item=>{
            return item.id === id;
        })
        console.log(`The Index is: ${index}`)
        let newTodos = [ ...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        console.log(todos)
        setTodos(newTodos)
        console.log(todos)
        saveToLS();
    }
    const ToggleFinished =()=>{
        setShowFinish(!ShowFinish)
    }


    return (  
        <>
            <div className='mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2'>
                <h1 className='font-bold text-center text-xl'>iTask - Manage your Today Goals</h1>
                <div className='addTodo my-5 flex flex-col gap-3'>
                    <h2 className='text-lg font-bold'>Add a Todo</h2>
                    <input value={todo} onChange={HandleChange} className='px-1 w-full rounded-lg py-1' type='text' />
                    <button onClick={HandleAdd} disabled={todo.length<3} className='disabled:bg-purple-600 bg-purple-600 hover:bg-purple-900 p-2 py-1 text-sm font-bold text-white rounded-md'>Add</button>
                </div>
                <input className='my-2' onChange={ToggleFinished} type='checkbox' checked={ShowFinish} /> Show Finished
                <h2 className='text-lg font-bold'>Your Todos</h2>
                <div className='todos '>
                    {todos.length === 0 && <div className='m-5'>No TO-Do to Display</div>}

                    {todos.map(item=>{
                        return (ShowFinish || !item.isCompleted) && <div key={item.id} className='todo flex md:w-1/2 justify-between my-2'>
                            <div className='flex gap-5'>
                                <input type='checkbox' name={item.id} onChange={HandleCheckbox}  checked={todo.isCompleted} /> 
                                <div className={item.isCompleted? "line-through": ""}>{item.todo}</div>
                            </div>
                            <div className='buttons flex h-full'>
                                <button onClick={(e)=>{HandleEdit(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit/></button>
                                <button onClick={(e)=>{HandleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><AiFillDelete /></button>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </>
    );
}

export default YourTask;