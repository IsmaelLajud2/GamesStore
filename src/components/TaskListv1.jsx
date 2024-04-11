import React, {useState} from 'react' 
import { Form , Table } from 'react-bootstrap'




const TaskListv1 = () => {
    const [task, setTask] = useState("")

    const [taskList, setTaskList] = useState([]);

    const handleSubmit=(e) =>{
        e.preventDefault(); 

        e.target.reset() 

        const newTaskList =[...taskList, task];
        setTaskList(newTaskList)
    }
    
  return (
<>
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >INGRESA TU TAREA :      </Form.Label>
        <Form.Control onChange={(e) => setTask(e.target.value)} type="text" placeholder="Ingresa tu tarea" />
        </Form.Group>
        </Form>
        <Table striped bordered hover> 
      
      <thead>
        <tr>
            <th>Tareas:</th> 
            </tr>
            </thead> 
         
        <tbody>
        {taskList.map((task , i) => 
        <tr key={i} > 
            <td>{task}</td>
            </tr>)}
            </tbody>
   
     
    </Table>

</>
  )
}

export default TaskListv1