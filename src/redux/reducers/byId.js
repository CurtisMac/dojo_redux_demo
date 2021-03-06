const byId = (state = {}, action)=>{
  if (action.response){
    return {
      ...state,
      ...action.response.entities.todos
    }
  }
  return state
}

export default byId

export const gotTodo = (state, id) => state[id]

