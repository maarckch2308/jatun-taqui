import React from 'react';

const MatchCard = ({ match }) => {
    const { teamA, teamB, date, score } = match;

    return (
        <div className="match-card">
            <h3>{teamA} vs {teamB}</h3>
            <p>Date: {new Date(date).toLocaleDateString()}</p>
            <p>Score: {score}</p>
        </div>
    );
};

export default MatchCard;