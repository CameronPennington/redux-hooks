import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux";
import uuid from "uuid/v4";

export default () => {
	const [todo, setTodo] = useState("");
	const dispatch = useDispatch();
	const addTodo = todo => dispatch(addTodoAction(todo));
	const onChange = event => {
		setTodo(event.target.value);
	};
	const onSubmit = event => {
		event.preventDefault();
		if (todo.trim() === "") return;
		addTodo({
			id: uuid(),
			name: todo,
			complete: false
		});
		setTodo("");
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="form-div">
				<input
					type="text"
					name="todo"
					placeholder="Add a todo"
					value={todo}
					onChange={onChange}
				></input>
				<button type="submit">Add Todo</button>
			</div>
		</form>
	);
};
