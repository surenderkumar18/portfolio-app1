    -   createSlice
        -   name
        -   initialState
        -   reducers
            -   addTodo
                -   state
                -   action
            -   deleteTodo

        -   extraReducers(builder)
            -   builder.addCase
                -   fulfilled
                -   rejected
                -   error

    -   export {addTodo, deleteTodo} = sliceName.actions
    -   export default sliceName.reducer

# createAsyncThunk

    - = createAsyncThunk('todo/fetchByUserId', async () => {
        await fetch......
    })

[useSelector]: `it will help us to subscribe to redux store.`
