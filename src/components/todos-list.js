import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header'



export default class TodosList extends React.Component {
	renderItems() {
		return _.map(this.props.todos, (todo,index) => <TodosListItem key={index} 
			{...todo} />);

		/*_.map(this.props.todos, function(todo,index){
			return <TodosListItem  key = {index} task={todo.task} isCompleted={todo.isCompleted} />
		})
		*/

	}


	render() {
		console.log(this.props)

		return (
			<table>
				<TodosListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}