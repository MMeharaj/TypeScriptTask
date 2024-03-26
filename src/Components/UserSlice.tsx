import {PayloadAction, createSlice} from '@reduxjs/toolkit'
// import { userList} from './Data';

interface User{
    id: number;
    name:string;
    email:string;
};

interface TableState{
    users: User[]
}
const initialState:TableState={
    users:[],
};
const userSlice  = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser: (state,action:PayloadAction<User>) => {
            state.users.push(action.payload);

        },
        updateUser:(state,action:PayloadAction<User>) => {
            const {id,name,email} = action.payload;
            const updatinguser=state.users.find(user => user.id === id);
            if(updatinguser){
                updatinguser.name=name;
                updatinguser.email=email;
            }
        },
        deleteUser: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            state.users = state.users.filter(user => user.id !== id);
        }
    }
})

export const {addUser,updateUser,deleteUser} = userSlice.actions
export default userSlice.reducer;

export type {TableState}
export interface RootState{
    table: TableState
}
export type { User}
