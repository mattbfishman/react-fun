import { useMemo } from "react";

function TaskView ({tasks, handleDrag, handleDrop}){
    const taskElements = useMemo(() => {
        return tasks.map((task) => {
            const {label, tasks} = task;
            return (
                <div className="taskMenu" onDrop={(e) => handleDrop(e)} key={label} onDragStart={handleDrag} onDragOver={(e) => {e.preventDefault()}}>
                    <div className="test" >{label}</div>
                    {tasks.map((innerTask, idx) => {
                        return (
                            <div className="taskItem" key={idx} draggable={true}>
                                {innerTask}
                            </div>
                        );
                    })}
                </div>
                
            )
        })
    }, [tasks])

    return (
        <div className="taskView">
            {taskElements}
        </div>
    );
}

export default TaskView;