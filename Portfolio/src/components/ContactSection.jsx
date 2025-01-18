import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Error state
  const [errors, setErrors] = useState({
    message: ''
  });

  // Captcha state
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const recaptchaRef = useRef();

  // Contact information array
  const contactInfo = [
    {
      title: "Phone Number",
      value: "+63 09495781900"
    },
    {
      title: "Email",
      value: "Tpcenter09@gmail.com"
    }
  ];

  // Form fields array with placeholders
  const formFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Insert your name here"
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Insert your email here"
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      required: true,
      rows: 4,
      placeholder: "Your message"
    }
  ];

  // Image data
  const profileImage = {
    src: "/assets/ContactProfile.png",
    alt: "Contact Profile",
    className: "w-100 h-100 object-cover lg:w-100 lg:h-100"
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'message') {
      validateMessage(value);
    }
  };

  // Message validation function
  const validateMessage = (message) => {
    if (message.length < 25) {
      setErrors(prev => ({
        ...prev,
        message: 'Message must be at least 25 characters long'
      }));
    } else if (message.length > 120) {
      setErrors(prev => ({
        ...prev,
        message: 'Message cannot exceed 120 characters'
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        message: ''
      }));
    }
  };

  // Handle CAPTCHA verification
  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(!!value);
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate message
    validateMessage(formData.message);

    // Check if there are any errors and captcha is verified
    if (!errors.message && 
        formData.message.length >= 25 && 
        formData.message.length <= 120 && 
        isCaptchaVerified) {
      try {
        // Send email using EmailJS
        const response = await emailjs.send(
          'service_p19kknp', // Replace with your Service ID
          'template_knhpc4p', // Replace with your Template ID
          formData,
          'rKmxdmdy5xm_TNlCD' // Replace with your User ID
        );
        console.log('Email sent successfully:', response);

        // Reset form and captcha after successful submission
        setFormData({ name: '', email: '', message: '' });
        setIsCaptchaVerified(false);
        recaptchaRef.current.reset();
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else if (!isCaptchaVerified) {
      alert('Please verify that you are not a robot');
    }
  };

  return (
    <div className="mt-36 flex px-4 items-center flex-col lg:flex-row gap-10 container mx-auto">
      {/* Left side - Image */}
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:pl-20">
        <img
          src={profileImage.src}
          alt={profileImage.alt}
          className={profileImage.className}
        />
      </div>

      {/* Right side - Contact Form */}
      <div className="w-full lg:w-1/2 px-4 lg:px-16 bg-[#F94E41] rounded-lg h-[745px]">
        {/* Contact Me Title */}
        <h2 className="text-3xl font-semibold text-white mt-20">Contact Me!</h2>

        {/* Phone number and Email description */}
        <div className="mt-4 mb-6">
          <div className="flex justify-between">
            {contactInfo.map((info, index) => (
              <div key={index} className="w-full lg:w-1/2">
                <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                <p className="text-sm text-white">{info.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          {formFields.map((field, index) => (
            <div key={index}>
              <label 
                htmlFor={field.id} 
                className="block text-sm font-medium text-white"
              >
                {field.label}
                {field.id === 'message' && (
                  <span className="text-xs ml-1">
                    ({formData.message.length}/120 characters)
                  </span>
                )}
              </label>
              {field.type === 'textarea' ? (
                <div>
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows={field.rows}
                    required={field.required}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className={`mt-1 block w-full px-3 py-2 text-black border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-yellow-300">
                      {errors.message}
                    </p>
                  )}
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  required={field.required}
                  value={formData[field.id]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
                />
              )}
            </div>
          ))}

          {/* ReCAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LddOLsqAAAAAIB0TYpW8b92A3RREM0Az4Ua9fyM" // Replace with your site key
              onChange={handleCaptchaChange}
              theme="light"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={!isCaptchaVerified}
              className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white 
                ${isCaptchaVerified 
                  ? 'bg-indigo-600 hover:bg-indigo-700' 
                  : 'bg-indigo-400 cursor-not-allowed'}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
