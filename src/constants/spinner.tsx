import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Spinner: React.FC = () => {
    return (
        <div className="spinner">
            <FaSpinner className="spinner-icon" />
        </div>
    );
};

export default Spinner;