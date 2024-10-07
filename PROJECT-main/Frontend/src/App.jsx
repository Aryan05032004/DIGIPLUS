import { activateSimCard, deactivateSimCard, getSimDetails } from './components/simAPI';
import SimCardActivation from './components/simCardActivation';
import { useState } from 'react';

const App = () => {
    const [simNumber, setSimNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [simDetails, setSimDetails] = useState(null);
    const [message, setMessage] = useState('');

    const handleActivate = async () => {
        const result = await activateSimCard(simNumber, phoneNumber);
        setMessage(result.message);
        setSimDetails(result.simCard || null);
    };

    const handleDeactivate = async () => {
        const result = await deactivateSimCard(simNumber);
        setMessage(result.message);
        setSimDetails(result.simCard || null);
    };

    const handleGetDetails = async () => {
        const result = await getSimDetails(simNumber);
        setSimDetails(result);
        setMessage('');
    };

    return (
        <SimCardActivation
            simNumber={simNumber}
            setSimNumber={setSimNumber}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            handleActivate={handleActivate}
            handleDeactivate={handleDeactivate}
            handleGetDetails={handleGetDetails}
            message={message}
            simDetails={simDetails}
        />
    );
};

export default App;