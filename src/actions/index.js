// Single action creater called selectBook
// We have to send actions through all reducers
export function selectBook(book){
  // SelectBook is an action creator, needs to return an actions
  // An object with a type property
  return {
    // Every action must have a type that derscribes the
    // purpose of the action
      type: 'BOOK_SELECTED',
      payload: book
  };
}
