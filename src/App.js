// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectData, selectError, selectLoading } from './features/apiSlice';

const App = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);

    const handleFetchData = () => {
        dispatch(fetchData());
    };

    return (
        <div>
            <h1>Public APIs</h1>
            <button onClick={handleFetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Data'}
            </button>
            {error && <div>Error: {error}</div>}
            <div>
                {data && data.map(api => (
                    <div key={api.API}>
                        <h2>{api.API}</h2>
                        <p>{api.Description}</p>
                        <p>Category: {api.Category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;