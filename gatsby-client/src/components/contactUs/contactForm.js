import React, { useContext, useState } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import {
  MdOutlineLocalPhone,
  MdOutlineEmail,
  MdPersonOutline,
} from 'react-icons/md';

const ContactForm = () => {
  const { handleContactSubmit } = useContext(PrayerTimesContext);

  const [field, setField] = useState({
    name: {
      value: '',
      status: 'empty',
      error: false,
    },
    email: {
      value: '',
      status: 'empty',
      error: false,
    },
    phone: {
      value: '',
      status: 'empty',
      error: false,
    },
    message: {
      value: '',
      status: 'empty',
      error: false,
    },
  });

  const handleFieldChange = (e) => {
    setField({
      ...field,
      [e.target.id]: {
        value: e.target.value,
        status: e.target.value.length > 0 ? 'dirty' : 'empty',
      },
    });
  };

  return (
    <form
      onSubmit={handleContactSubmit}
      className="mx-auto w-10/12 rounded-xl bg-white p-7 text-black lg:w-5/12"
    >
      <div className="mb-7">
        <h3 className="text-lg font-bold">Contact Form</h3>
        <p className="text-sm">Required fields are marked with an asterisk*</p>
      </div>

      {/* Form inputs */}
      <div className="mb-7 flex w-full flex-row gap-10">
        <div className="flex w-1/2 flex-col gap-4">
          {/* Your Name */}
          <div className="relative">
            <MdPersonOutline className="absolute top-10 left-10px" />
            <label className="flex flex-col" htmlFor="name">
              * Your Name
              <input
                className={`mt-1 rounded-md py-2 pl-8 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary ${
                  field.name.status === 'empty' ? 'bg-gray-200' : 'bg-white'
                }`}
                value={field.name.value}
                onChange={handleFieldChange}
                id="name"
                type="text"
                placeholder="Ibn Rushd"
                autoFocus
              ></input>
            </label>
          </div>

          {/* Your Email */}
          <div className="relative">
            <MdOutlineEmail className="absolute top-10 left-10px" />
            <label className="flex flex-col" htmlFor="email">
              * E-Mail
              <input
                className={`mt-1 rounded-md py-2 pl-8 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary ${
                  field.email.status === 'empty' ? 'bg-gray-200' : 'bg-white'
                }`}
                value={field.email.value}
                onChange={handleFieldChange}
                id="email"
                type="email"
                placeholder="mansa@musa.com"
              />
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <MdOutlineLocalPhone className="absolute top-10 left-10px" />
            <label className="flex flex-col" htmlFor="phone">
              Phone
              <input
                className={`mt-1 rounded-md py-2 pl-8 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary ${
                  field.phone.status === 'empty' ? 'bg-gray-200' : 'bg-white'
                }`}
                value={field.phone.value}
                onChange={handleFieldChange}
                id="phone"
                type="tel"
                placeholder="123-456-7890"
              />
            </label>
          </div>
        </div>
        <div className="flex w-1/2 flex-col">
          <label className="flex h-full flex-col" htmlFor="message">
            * Message
            <textarea
              className={`mt-1 h-full rounded-md py-2 pl-4 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary ${
                field.message.status === 'empty' ? 'bg-gray-200' : 'bg-white'
              }`}
              value={field.message.value}
              onChange={handleFieldChange}
              id="message"
              type="text"
              placeholder="Write your message here..."
            />
          </label>
        </div>
      </div>

      {/* Submit button */}
      <div className="mx-auto w-fit">
        <input
          className="rounded-md bg-green-dark p-4 text-white hover:bg-green-secondary"
          type="submit"
          value="Send Message"
        />
      </div>
    </form>
  );
};

export default ContactForm;
