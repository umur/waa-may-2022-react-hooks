import { useState, useEffect } from 'react';
import axios from 'axios';


function Category() {

    const [categoryState, setCategoryState] = useState([
        { id: 0, name: '', }
    ])

    const fetchCategory = async () => {
        const result = await axios.get('http://localhost:8080/api/v1/categories')
        setCategoryState(result.data)
    }

    useEffect(() => {
        fetchCategory();
    }, [])

    return (
        <div>
            {
                categoryState.map(a => {
                    return (
                        <>
                            <div key={a.id}>
                                <p>{a.name}</p>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Category;


