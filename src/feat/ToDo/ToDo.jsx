import {useState} from 'react';
import AddTask from "./AddTask";
import TaskView from './TaskView';
import './ToDo.css'


const TASKS = [
    {label: 'To Do', tasks: []},
    {label: 'In Progress', tasks: []},
    {label: 'Done', tasks: []}
]

function ToDo () { 
    const [tasks, setTasks] = useState(TASKS);

    const addTask = (value) => {
        tasks[0].tasks.push(value);
        setTasks([...tasks]);
    }

    const handleDrag = (e) => {
        e.dataTransfer.setData("text", e.target.innerHTML);
    }

    const handleDrop = (e) => {
        
        e.preventDefault();
        const data = e.dataTransfer.getData("text");
        const currentArray = tasks.find((task) =>{ 
            return task.label == e.target.querySelector('.test').innerText;
        });

        let index, taskArray;
        tasks.forEach((task) => {
            let tempIndex = task.tasks.findIndex((tempTask) => {
                return (
                    tempTask === data
                );
            })

            if(tempIndex > -1){
                taskArray = task;
                index = tempIndex;
            }
        })

        taskArray?.tasks.splice(index, 1);
        currentArray?.tasks.push(data);
        setTasks([...tasks]);
    }
    return (
        <div>
            <AddTask onClick={addTask}/>
            <TaskView tasks={tasks} handleDrag={handleDrag} handleDrop={handleDrop}/>
        </div>
    )
}

export default ToDo;