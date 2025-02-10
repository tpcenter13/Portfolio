import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ message: '' });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [notification, setNotification] = useState(null);
  
  const recaptchaRef = useRef();

  const validateMessage = (message) => {
    if (message.length < 25) return "Message must be at least 25 characters long";
    if (message.length > 120) return "Message cannot exceed 120 characters";
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'message') {
      setErrors(prev => ({ ...prev, message: validateMessage(value) }));
    }
  };

  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(!!value);
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });

    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const messageError = validateMessage(formData.message);
    if (messageError) {
      setErrors(prev => ({ ...prev, message: messageError }));
      return;
    }

    if (!isCaptchaVerified) {
      showNotification('error', 'Please verify that you are not a robot');
      return;
    }

    try {
      await emailjs.send(
        'service_p19kknp', // Replace with your Service ID
        'template_knhpc4p', // Replace with your Template ID
        formData,
        'rKmxdmdy5xm_TNlCD' // Replace with your User ID
      );

      showNotification('success', 'Message sent successfully! We will get back to you soon.');

      setFormData({ name: '', email: '', message: '' });
      setIsCaptchaVerified(false);
      recaptchaRef.current.reset();
    } catch (error) {
      showNotification('error', 'Failed to send message. Please try again later.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="mt-24 flex px-4 items-center flex-col lg:flex-row gap-10 container mx-auto relative">
      {notification && (
        <div className={`fixed top-4 right-4 z-50 w-96 p-4 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out 
          ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          <div className="flex items-center text-white">
            <span className="text-lg font-semibold">
              {notification.type === 'success' ? '✓' : '⚠'}
            </span>
            <div className="ml-3">
              <p className="font-semibold">{notification.type === 'success' ? 'Success' : 'Error'}</p>
              <p className="text-sm">{notification.message}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:pl-20">
        <img src="/assets/ContactProfile.png" alt="Contact Profile" className="w-100 h-100 object-cover lg:w-100 lg:h-100" />
      </div>

      <div className="w-full lg:w-1/2 px-4 lg:px-16 bg-[#F94E41] rounded-lg h-[745px]">
        <h2 className="text-3xl font-semibold text-white mt-20">Contact Me!</h2>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} 
              placeholder="Insert your name here" className="mt-1 block w-full px-3 py-2 text-black border rounded-md" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} 
              placeholder="Insert your email here" className="mt-1 block w-full px-3 py-2 text-black border rounded-md" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message <span className="text-xs ml-1">({formData.message.length}/120 characters)</span>
            </label>
            <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleInputChange} 
              placeholder="Your message" className={`mt-1 block w-full px-3 py-2 text-black border rounded-md 
              ${errors.message ? 'border-red-500' : 'border-gray-300'}`} />
            {errors.message && <p className="mt-1 text-sm text-yellow-300">{errors.message}</p>}
          </div>

          <div className="flex justify-start ">
            <ReCAPTCHA ref={recaptchaRef} sitekey="6LddOLsqAAAAAIB0TYpW8b92A3RREM0Az4Ua9fyM" onChange={handleCaptchaChange} theme="light" />
          </div>

          <div>
            <button type="submit" disabled={!isCaptchaVerified} className={`w-full py-2 px-4 border rounded-md text-white mt-2
              ${isCaptchaVerified ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-400 cursor-not-allowed'}`}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
