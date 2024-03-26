import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserSlice";
import '../Assesstyle/style.css';
import { RootState, User } from "./UserSlice";


const Update: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const users = useSelector((state: RootState) => state.table.users);
    const existingUser: User | undefined = users.find(user => user.id === Number(id));
    const initialName: string = existingUser ? existingUser.name : '';
    const initialEmail: string = existingUser ? existingUser.email : '';
    const [uname, setName] = useState<string>(initialName);
    const [uemail, setEmail] = useState<string>(initialEmail);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!existingUser) return;
        dispatch(updateUser({
            id: existingUser.id,
            name: uname,
            email: uemail
        }));
        navigate("/");
    }

    return (
        <div className="form-container">
            <h3>Update User</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Name"
                        value={uname}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name">Email:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Email"
                        value={uemail}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default Update;
