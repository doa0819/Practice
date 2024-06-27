import {useState} from "react";

function Content() {

    return(
       
        <div className="content">

            <h1>ToDo - List</h1>
            <ToDoList/>


        </div>

    );
}

function ToDoList() {

    const [todos, setTodos] = useState([{
        inputText: '',
        nextId: ''
    }
        
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(0);

    const onChangeHandler = e => {

        setInputText(e.target.value)
        
    }

    const onClickHandler = () => {

        todos.reverse()

        const changeTodos = todos.concat({
            id: nextId,
            description: inputText,
            isDone: false
        });

        changeTodos.reverse();
        setInputText('');
        setNextId(nextId +1);
        setTodos(changeTodos);


    }



    return(

        <>

            <div className="append-list"> 
                <input 
                    type="text"
                    value={inputText}
                    onChange={onChangeHandler}
                />
                <button onClick={onClickHandler}>추가</button>
            </div>

            <div className="todo-list">
                <List
                    todos ={todos}
                    setTodos={setTodos}
                   
                />

            </div>
        
        </>

        
    );


}

function List({todos, setTodos}) {

    const onChangeHandler = e => {
        const changeIsDone = todos.map(
            todo => {
                if(todo.id === parseInt(e.target.id)){
                    todo.isDone = e.target.checked;
                }

                return todo;
            }
        )

        setTodos(changeIsDone);
    }

    const onClickRemove = id => {

        const Remove = todos.filter(todo => todo.id !== id)

        setTodos(Remove);
    }

    return (
        <>
            {todos.map((todo) => (
                <p key={todo.id}>
                    <input type="checkbox" id={todo.id} onChange={onChangeHandler}/>
                    <label for="{todo.id}" style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>{todo.description}</label>
                    <button onClick={() => onClickRemove(todo.id)}>삭제</button>
                </p>
            ))}
        </>
    );

    

}

export default Content;