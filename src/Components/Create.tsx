import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from './UserSlice';
import { useNavigate } from "react-router-dom";
import '../Assesstyle/style.css';
import { RootState } from "./UserSlice";
const Create: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const usersLength = useSelector((state: RootState) => state.table.users.length);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addUser({ id: usersLength + 1, name, email }));
        navigate("/");
    }

    return (
        <div className="form-container">
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name">Email:</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default Create;
