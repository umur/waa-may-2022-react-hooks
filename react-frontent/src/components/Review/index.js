import { useState, useEffect } from 'react';
import axios from 'axios';


function Review() {

    const [reviewState, setReviewState] = useState([
        { id: 0, comment: '', user: {}}
    ])

    const fetchReview = async () => {
        const result = await axios.get('http://localhost:8080/api/v1/reviews')
        setReviewState(result.data)
    }

    useEffect(() => {
        fetchReview();
    }, [])

    return (
        <div>
            {
                reviewState.map(a => {
                    return (
                        <>
                            <div key={a?.id}>
                                <p>{a?.comment}</p>
                                <p>{a?.user?.name}</p>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Review;


