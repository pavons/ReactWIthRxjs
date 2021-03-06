import React, { useEffect, useState } from 'react';
import { TodoService } from '../services/my-service';
import { TodoItem } from '../models';
import TodoList from '../containers/TodoList';
import { Subscription } from 'rxjs';

const TodoPage: React.FC = () => {

  const [todos, setTodos] = useState();

  useEffect(() => {
    const todoData$: Subscription = TodoService.todoData$
      .subscribe((v: TodoItem[]) => {
        setTodos(v);
      });
    return () => todoData$.unsubscribe();
  }, []);

  return (
    <TodoList todos={todos} />
  )
}

export default TodoPage;