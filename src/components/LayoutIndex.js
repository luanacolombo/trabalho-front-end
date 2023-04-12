import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useEffect } from "react";

const LayoutIndex = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('uid')) {
            alert('You are already logged in')
            console.log(auth.currentUser)
            navigate("/home")
        }
    });

    return (
        <div>
            {children}
        </div>
    )

}
export default LayoutIndex

