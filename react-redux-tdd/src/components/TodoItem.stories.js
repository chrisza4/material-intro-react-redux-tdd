import React from 'react';
import '../index.css'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Moment from 'moment'

import TodoItem from './TodoItem'

const actions = {
  editTodo: action('EditTodo'),
  deleteTodo: action('deleteTodo'),
  completeTodo: action('completeTodo')
}
storiesOf('TodoItem', module)
  .add('Normal', () => (
    <TodoItem
      todo={{ id: 1, text: 'Please do this', completed: false }}
      editTodo={action('editTodo')}
      deleteTodo={action('deleteTodo')}
      completeTodo={action('completedTodo')}
    />
  ))
  .add('Important', () => (
    <TodoItem
      todo={{ id: 1, text: 'Please do this', completed: false, important: true }}
      editTodo={action('editTodo')}
      deleteTodo={action('deleteTodo')}
      completeTodo={action('completedTodo')}
    />
  ))
  .add('Completed', () => (
    <TodoItem
      todo={{ id: 1, text: 'Please do this', completedDate: Moment('2019-02-15').format('DD MMM YYYY'), completed: true }}
      editTodo={action('editTodo')}
      deleteTodo={action('deleteTodo')}
      completeTodo={action('completedTodo')}
    />
  ))
