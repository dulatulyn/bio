import React, { useState } from 'react';

export default function ContactMe(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        topic: '',
        message: '',
        checkbox: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phoneNumber, topic, message } = formData;
        
        const subject = `Contact from ${firstName} ${lastName} - ${topic}`;
        const body = `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phoneNumber}
Topic: ${topic}

Message:
${message}`;

        window.location.href = `mailto:dulatulyn.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return(
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get in Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eum.</p>
            </div>
            <form className="contact--form--container" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" 
                        className="contact--input text-md" 
                        name="firstName"
                        id="first-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required/>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" 
                        className="contact--input text-md" 
                        name="lastName"
                        id="last-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required/>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" 
                        className="contact--input text-md" 
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required/>
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">phone number</span>
                        <input type="text" 
                        className="contact--input text-md" 
                        name="phoneNumber"
                        id="phone-number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required/>
                    </label>
                    <label htmlFor="choose-topic" className="contact--label">
                        <span className="text-md">Choose a topic</span>
                        <select 
                            name="topic" 
                            id="choose-topic" 
                            className="contact--input text-md"
                            value={formData.topic}
                            onChange={handleChange}
                        >
                            <option value="">Select One...</option>
                            <option value="Job Opportunity">Job Opportunity</option>
                            <option value="Collaboration">Freelance</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea
                        className="contact--input text-md"
                        id="message"
                        name="message"
                        rows="8"
                        placeholder="type your message..."
                        value={formData.message}
                        onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="checkbox" className="checkbox--label">
                        <input 
                            type="checkbox" 
                            required 
                            name="checkbox" 
                            id="checkbox"
                            checked={formData.checkbox}
                            onChange={handleChange}
                        />
                        <span className="text-sm">I accept the terms</span>
                    </label>
                    <button className="btn btn--outline contact--form--btn">Submit</button>
                </div>
            </form>
        </section>
    )
}