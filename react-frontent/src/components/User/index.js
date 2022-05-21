import { useState, useEffect } from 'react';
import axios from 'axios';


function User() {

    const [userState, setUserState] = useState([
        { id: 0, email: '', firstname: '', lastname: ''}
    ])

    const fetchUser = async () => {
        const result = await axios.get('http://localhost:8080/api/v1/users')
        setUserState(result.data)
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div>
            {
                userState.map(a => {
                    return (
                        <>
                            <div key={a?.id}>
                                <p>{a?.email}</p>
                                <p>{a?.firstname}</p>
                                <p>{a?.lastname}</p>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default User;


