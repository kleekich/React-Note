import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todos';
const todos = [
	{
		task: 'Make tutorial',
		isCompleted: false
	},
	{
		task: 'eat dinner',
		isCompleted: true
	}

]

export default class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			todos: todos
		};

	}

	render() {
		return (
			<div>
				<h1>React ToDos App!!</h1>
				<CreateTodo createTask={this.createTask.bind(this)} />
				<TodosList 
					todos={this.state.todos} 
				/>
			</div>
		);
	}

	createTask(task){
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({ todos: this.state.todos});

	}
}