// Import React and necessary hooks
import React, { useState, useEffect } from 'react';

// Import Firebase functions and the initialized database
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; // Adjust this path if 'firebase.js' is in a different directory

const MyComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const dataRef = ref(database, 'https://selwell-v1-default-rtdb.europe-west1.firebasedatabase.app');

        onValue(dataRef, (snapshot) => {
            setLoading(false);
            const fetchedData = snapshot.val();
            setData(fetchedData);
        }, (error) => {
            setLoading(false);
            setError(error);
        });

        return () => {
            // Cleanup if necessary
        };
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Database Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default MyComponent;
