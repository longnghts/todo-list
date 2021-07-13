import react from 'react';

// const incomplete = {
//   background_color: "red"
// }
// const complete = {
//   background_color: "red"
// }
const Results = props => {
    const {myList, setMyList} = props
    const checkedHandler = (i) =>{
    console.log(i, myList[i])
    let task = myList[i];
    task.Completed = !task.Completed;
        setMyList([...myList.slice(0,i),task,...myList.slice(i+1)])
    }
    const deleteHandler = i =>{
        setMyList([...myList.slice(0,i),...myList.slice(i+1)])
    }
    return(
        <div className="col-6">
            <table className="table table-striped">
                <tr>
                    <th>Task Name</th>
                    <th>Completed</th>
                </tr>
                {
                    myList.map((task, i) => {
                        return (
                        <tr key={i}>
                            {!task.Completed ?
                            <td>{task.Name}</td>
                            : <td style={{textDecoration:"line-through"}}> {task.Name}</td>
                            }
                            <td><input type="checkbox" checked={task.Completed} onChange={e => checkedHandler(i)}/></td>
                            <td><button onClick={e=>deleteHandler(i)}>Delete Me</button></td>
                        </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Results;
