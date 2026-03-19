import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace the phone number and message below with your details
    // const phoneNumber = '+911234567890'; 
    const message = 'Hello, Now I want to consult mylearners';
    const url = `https://wa.me/+919110389175?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp chat in a new tab
    window.open(url, '_blank');
  };

  return (
    <div style={styles.container} onClick={handleWhatsAppClick}>
      <FaWhatsapp style={styles.icon} />
    </div>
  );
};

// Styling for the floating button
const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    zIndex: 1000, // Ensure the button is on top of other content
  },
  icon: {
    color: '#fff',
    fontSize: '30px',
  },
};

export default WhatsAppButton;
