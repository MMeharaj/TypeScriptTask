import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserSlice';
import { RootState, User } from './UserSlice'; 
import '../Assesstyle/style.css';

const Home: React.FC = () => {
    const users = useSelector((state: RootState) => state.table.users); 
    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch(deleteUser({ id }));
    }

    return (
        <div className='container'>
            <button className='Add-button'><Link to="/Create">Add+</Link></button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User, index: number) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='edit-button'><Link to={`/edit/${user.id}`}>Edit</Link></button>
                                <button className='del-button' onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
