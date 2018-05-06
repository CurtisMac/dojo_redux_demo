import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  textField: {
    marginLeft: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },
    menu: {
      width: 200
    }
  }
})

const AddTodo = ({ classes, onAddTodoClick }) => {
  return (
    <form onSubmit={onAddTodoClick}>
      <TextField
        className={classes.textField}
        id='add-todo'
        label='Add a Todo'
        margin='normal'
        name='todo'
        placeholder='i.e buy chocolate'
      />
      <Button
        className={classes.button}
        color='primary'
        type='submit'
        variant='raised'
      >
        Add Todo
      </Button>
    </form>
  )
}

AddTodo.propTypes = {
  onAddTodoClick: PropTypes.func.isRequired
}

export default withStyles(styles)(AddTodo)