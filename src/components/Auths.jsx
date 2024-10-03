import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faFingerprint, faMoon, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Auth = () => {

    const [selectedOption, setSelectedOption] = useState('new');

    const [isExistingCustomer, setIsExistingCustomer] = useState(false);

    const { loginWithRedirect } = useAuth0();

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="fixed w-full h-full max-w-sm p-4 overflow-hidden border-2 border-gray-200 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
                <div className="relative left-[300px] flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full relative bottom-[5px] left-[5px]"></div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-600">Hello There</h1>
            </div>
            <h2 className="text-lg font-semibold mb-8">Let's get you started</h2>

            <div className="flex mb-12 border rounded-full">
                <div
                    onClick={() => setIsExistingCustomer(false)}
                    className={`flex-1 py-2 text-center cursor-pointer rounded-full ${!isExistingCustomer ? 'bg-red-500 text-white text-sm' : 'text-gray-600 text-sm'}`}
                >
                    New Customer
                </div>
                <div
                    onClick={() => setIsExistingCustomer(true)}
                    className={`flex-1 py-2 text-center cursor-pointer rounded-full ${isExistingCustomer ? 'bg-red-500 text-white text-sm' : 'text-gray-600 text-sm'}`}
                >
                    Existing Customer
                </div>
            </div>

            {!isExistingCustomer ? (
                <>
                    <div className="mb-4 w-full p-2 border border-gray-300 bg-gray-200 rounded-lg">
                        <label className="block text-gray-700 mb-2 text-sm">Username / Email</label>
                        <input type="text" placeholder="Enter username" className="border-none bg-gray-200 outline-none w-full" />
                    </div>

                    <div className="mb-4 relative w-full p-2 border border-gray-300 bg-gray-200 rounded-lg">
                        <label className="block text-gray-700 mb-2 text-sm">Password</label>
                        <input type="password" placeholder="Enter password" className="border-none bg-gray-200 outline-none w-full" />
                        <button className="absolute right-3 top-3">
                            <i className="fas fa-eye text-l text-gray-400"></i>
                        </button>
                    </div>

                    <button className="text-sm text-red-500 mb-4">Forgot Password?</button>


                    <button className="w-full py-3 border border-gray-300 text-black rounded-lg mb-8"
                        onClick={() => loginWithRedirect()}
                    >Registers</button>

                </>
            ) : (

                <>
                    <div className="mb-4 relative w-full p-2 border border-gray-300 bg-gray-200 rounded-lg">
                        <label className="block text-gray-700 mb-2 text-sm">Password</label>
                        <input type="password" placeholder="Enter password" className="border-none bg-gray-200 outline-none w-full" />
                        <button className="absolute right-3 top-3">
                            <i className="fas fa-eye text-l text-gray-400"></i>
                        </button>
                    </div>

                    <button className="text-sm text-red-500 mb-4">Forgot Password?</button>


                    <button className="w-full py-3 border border-gray-300 text-black rounded-lg mb-8"
                        onClick={() => loginWithRedirect()}
                    >Log Ins</button>

                </>
            )}


            {/* {!isExistingCustomer ? (
        <button className="w-full py-3 border border-gray-300 text-black rounded-lg mb-8"
          onClick={() => loginWithRedirect()}
        >Registers</button>
      ) : (
      
      <button className="w-full py-3 border border-gray-300 text-black rounded-lg mb-8"
        onClick={() => loginWithRedirect()}
      >Log In</button>

      )} */}

            {/* <div className="flex justify-between items-center absolute bottom-0 left-0 right-0 p-8"> */}
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm p-6 bg-white flex justify-between items-center">

                <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full">
                    <FontAwesomeIcon icon={faGoogle} className="text-red-400" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full">
                    <FontAwesomeIcon icon={faBank} className="text-red-300 text-xl" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full">
                    <FontAwesomeIcon icon={faGithub} className="text-red-500" />
                </button>
            </div>
        </div >


    );
};

export default Auth;
