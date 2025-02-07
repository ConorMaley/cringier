import React from 'react';

const Loading: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="text-7xl">Loading...</div>
        </div>
    );
};

export default Loading;