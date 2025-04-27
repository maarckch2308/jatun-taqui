import React, { useEffect, useState } from 'react';
import MatchCard from '../components/MatchCard';
import { fetchMatches } from '../utils/api';

const MatchesPage = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMatches = async () => {
            try {
                const data = await fetchMatches();
                setMatches(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getMatches();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Football Matches</h1>
            <div>
                {matches.map(match => (
                    <MatchCard key={match.id} match={match} />
                ))}
            </div>
        </div>
    );
};

export default MatchesPage;