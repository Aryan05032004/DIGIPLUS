import PropTypes from 'prop-types';

const SimCardActivation = ({
    simNumber,
    setSimNumber,
    phoneNumber,
    setPhoneNumber,
    handleActivate,
    handleDeactivate,
    handleGetDetails,
    message,
    simDetails
}) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg transform transition duration-500 hover:scale-105">
                <h1 className="text-5xl font-bold mb-10 text-center text-blue-700">SIM Card Activation</h1>
                
                <div className="space-y-6">
                    <input
                        type="text"
                        placeholder="Enter SIM Number"
                        value={simNumber}
                        onChange={(e) => setSimNumber(e.target.value)}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300 shadow-sm"
                    />
                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition duration-300 shadow-sm"
                    />
                </div>
                
                <div className="flex justify-between items-center mt-8 space-x-4">
                    <button
                        onClick={handleActivate}
                        className="flex-1 bg-blue-600 text-white py-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                        Activate SIM
                    </button>
                    
                    <button
                        onClick={handleGetDetails}
                        className="flex-1 bg-green-600 text-white py-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
                    >
                        SIM Details
                    </button>
                    
                    <button
                        onClick={handleDeactivate}
                        className="flex-1 bg-red-600 text-white py-4 rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out"
                    >
                        Deactivate SIM
                    </button>
                </div>

                {message && (
                    <p className="mt-6 text-center text-lg text-red-600 font-semibold">
                        {message}
                    </p>
                )}

                {simDetails && (
                    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner text-gray-800">
                        <pre>{JSON.stringify(simDetails, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

SimCardActivation.propTypes = {
    simNumber: PropTypes.string.isRequired,
    setSimNumber: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    setPhoneNumber: PropTypes.func.isRequired,
    handleActivate: PropTypes.func.isRequired,
    handleDeactivate: PropTypes.func.isRequired,
    handleGetDetails: PropTypes.func.isRequired,
    message: PropTypes.string,
    simDetails: PropTypes.object
};

export default SimCardActivation;
