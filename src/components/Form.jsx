import React, { useState } from 'react';

const Form = props => {
    //Make an OBJ that houses all of the consts' from before
    const [myForm, setMyForm] = useState({
        Name: '',
        Completed : false
    })
    //Make a new const that handles the changing, making sure that we copy myForm with ...myForm
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name] : e.target.value})
    }

    const onSubmitHandler=e=>{
        //Prevents the page from refreshing
        e.preventDefault();
        props.addTask(myForm);
        setMyForm({...myForm,
            Name: ""
        })
    }
    return (
        <div className="col-6">
        {/* Creating a form */}
        <h3>Make a new task!</h3>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="Name">Task Name:</label>
                    <input type="text" value={myForm.Name}name="Name" className="form-control" onChange={onChangeHandler}/>
                </div>
                    <input type="submit" value="Add Task" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Form;
