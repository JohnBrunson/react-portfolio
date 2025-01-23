import { useState } from 'react';


function Form() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        // const { name, value } = e.target;

        // return name === 'firstName' ? setFirstName(value) : setLastName(value);
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert the user their first and last name, clear the inputs
        // alert(`Hello ${firstName} ${lastName}`);
        // setFirstName('');
        // setLastName('');
    };

    return (
        <div className="container text-center">
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your Name"
                />
                <input
                    value={emailAddress}
                    name="emailAddress"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your email address"
                />
                <input
                    value={userMessage}
                    name="userMessage"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your Message"
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
