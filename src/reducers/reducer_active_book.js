// State argument is not app state
// only state this reducer is responsible for
// state= null means if state is undefined(first time our app starts up)
// it will be set to null
export default function(state = null, action){
    switch (action.type) {
      case 'BOOK_SELECTED':
        // Payload is the book selected
        return action.payload;
    }
    return state;
}
