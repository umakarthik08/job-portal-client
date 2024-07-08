import React, { useState } from 'react';
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";

const Newsletter = () => {
    const [isSubscribed, setIsSubscribed] = useState("Subscribe");
    const [email, setEmail] = useState(""); // State to hold the email input value

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        if (isSubscribed === "Subscribe") {
            setIsSubscribed("Subscribed");
            alert("Subscribed successfully");
            setEmail(""); // Clear the email input after successful subscription
            // Further logic to handle subscribing the user
        } else {
            alert("You are already subscribed!"); // Optional: Notify the user they are already subscribed
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value); // Update the email state as the user types
    };

    return (
        <div className='my-6'>
            <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaEnvelopeOpenText />
                </h3>
                Join Our Email List for Job Alerts
                <p className='text-primary/75 text-base mb-4'>
                    Subscribe for Job alerts
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='name@mail.com'
                        className='w-full block py-2 pl-3 border focus:outline-none mb-1'
                        value={email}
                        onChange={handleEmailChange}
                        disabled={isSubscribed === "Subscribed"} // Disable input when already subscribed
                    />
                    <input
                        type="submit"
                        value={isSubscribed}
                        className='w-full block py-2 border focus:outline-none bg-blue-600 rounded-sm text-white cursor-pointer font-semibold'
                        disabled={isSubscribed === "Subscribed"} // Disable button when already subscribed
                    />
                </form>
            </div>

            <div className='my-6'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaRocket />
                </h3>
                Get notified faster
                <p className='text-primary/75 text-base mb-4'>
                    Upgrade to Premium for Instant Job Alerts
                </p>
                <div className='w-full space-y-4'>
                    <input
                        type="submit"
                        value={"Purchase premium"}
                        className='w-full block py-2 border focus:outline-none bg-blue-600 rounded-sm text-white cursor-pointer font-semibold'
                    />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
