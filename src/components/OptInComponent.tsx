'use client';

import React, { useState } from 'react';

// Define a custom type that extends the existing form attributes
type CustomFormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    minWidth?: string; // Add minWidth as an optional property
};

// Update the component to use the custom type
const OptInComponent: React.FC<CustomFormProps> = ({ minWidth, ...props }) => {
    const [isHovered, setIsHovered] = useState(false); // State to manage hover effect

    return (
        <form 
            className="email-form" // Ensure this matches the class in <EmailForm />
            data-options='{"settings":{...}}' 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '30px',
                border: 'none', // Remove the border
                borderRadius: '10px',
                backgroundColor: 'transparent', // Keep background transparent
                width: '100%', // Ensure full width
                maxWidth: '800px', // Increase max width to make the form wider
                margin: '0 auto'
            }}
        >
            <div style={{ display: 'flex', width: '100%' }}>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    style={{
                        flex: 1,
                        padding: '20px',
                        border: 'none', // Remove input border
                        borderRadius: '25px',
                        marginRight: '10px',
                        boxSizing: 'border-box',
                        fontSize: '18px',
                        height: '50px' // Set a fixed height for the input
                    }} 
                />
                <button 
                    type="submit" 
                    onMouseEnter={() => setIsHovered(true)} // Set hover state
                    onMouseLeave={() => setIsHovered(false)} // Reset hover state
                    style={{
                        backgroundColor: isHovered ? '#3a9bdc' : '#44b1ff', // Change color on hover
                        color: 'white', // Ensure text color is white for contrast
                        padding: '0 40px', // Adjust padding for horizontal space
                        border: 'none', // Remove button border
                        borderRadius: '25px',
                        cursor: 'pointer',
                        fontSize: '18px', // Ensure font size matches the design
                        height: '50px', // Set a fixed height for the button
                        lineHeight: '50px', // Set line-height to match height for vertical alignment
                        fontFamily: 'inherit', // Ensure font family matches the rest of the design
                        fontWeight: 'bold' // Optional: make the font bold if needed
                    }}
                >
                    Subscribe
                </button>
            </div>
            <input 
                type="hidden" 
                name="form_id" 
                value="YOUR_FORM_ID" // Replace with your actual form ID
            />
        </form>
    );
};

export default OptInComponent;
