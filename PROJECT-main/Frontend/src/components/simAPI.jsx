const API_URL = 'http://localhost:5000/api';

export const activateSimCard = async (simNumber, phoneNumber) => {
    const response = await fetch(`${API_URL}/activate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ simNumber, phoneNumber }),
    });
    return response.json();
};

export const deactivateSimCard = async (simNumber) => {
    const response = await fetch(`${API_URL}/deactivate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ simNumber }),
    });
    return response.json();
};

export const getSimDetails = async (simNumber) => {
    const response = await fetch(`${API_URL}/sim-details/${simNumber}`);
    return response.json();
};