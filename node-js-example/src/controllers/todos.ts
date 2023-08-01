// Holds functions that are to be executed when requests are made.
import { RequestHandler } from 'express'; // To automatically infer the req, res and next types.
import { Todo } from '../models/todos';

const TODOS: Todo[] = [];


export const createToDo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text );

    TODOS.push(newTodo);

    res.status(201).json({message: 'Created new todo', createToDo: newTodo});
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({todos: TODOS});
};

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const updatedText = (req.body as {text:string}).text;
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
    res.json({message: 'Updated!', updatedTodo: TODOS[todoIndex]});
};

export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }

    TODOS.splice(todoIndex, 1);
    res.json({message: 'Deleted!'});
};