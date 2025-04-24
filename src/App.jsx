import { useState } from 'react';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';
import icon from "./images/icon.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

	return (
		<>
		{/*-------------- contenido -----------------*/}
		<div className='card-to-do'>
			<div className="contain-one">
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
				<img src={icon} alt="Logo" width="60" height="60" class="d-inline-block align-text-top"/>
				<p>TaskHere</p>
				</a>
			</div>
			<a href="/login"><i class="bi bi-box-arrow-right"></i></a>
		</nav>
				
				<div className='counter-todos'>
					<h2>
						Tareas: <span>{todosCount}</span>
					</h2>
					<h2>
						Pendientes: <span>{pendingTodosCount}</span>
					</h2>
				</div>
				</div>
				<div className="contain-two">
				<h3>Mis Tareas</h3>
				<TodoList
					className="task-information"
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
					/>
				</div>
				<div className="contain-three">
				<button type="button" className="width-100 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar Tarea <i class="bi bi-plus-circle"></i></button>
				</div>
			</div>
		{/*-------------------- modal ---------------------------*/}
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content ">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Tarea</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div className='add-todo'>
						<TodoAdd handleNewTodo={handleNewTodo} />
				</div>
			</div>
			</div>
		</div>
		</div>
		</>
	);
}

export default App;
