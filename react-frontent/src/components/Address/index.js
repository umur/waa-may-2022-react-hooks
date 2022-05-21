import { useState, useEffect } from 'react';
import axios from 'axios';


function Address() {
    
    const [addressState, setAddressState] = useState([
        { id: 0,  street:'', zip: 0, user: {},}
    ])

    const fetchAddress = async () => {
        const result = await axios.get('http://localhost:8080/api/v1/address')
        setAddressState(result.data)
    }

    useEffect(() => {
        fetchAddress();
    }, [])

    return (
        <div>
            {
                addressState.map(a => {
                    return (
                        <>
                            <div key={a?.id}>
                                <p>{a.street}</p>
                                <p>{a.zip}</p>
                            </div>
                        </>
                    )
                })
            }            
        </div>
    )
}

export default Address;


