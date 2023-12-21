'use client';

import { Mail, Phone, User } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const contactForm = () => {
  return (
    <form className="mx-auto w-10/12 space-y-7 rounded-xl border border-green-dark p-7 lg:w-5/12">
      <section>
        <h3 className="text-lg font-bold">Contact Form</h3>
        <p className="text-sm">Required fields are marked with an asterisk*</p>
      </section>

      <section className="flex w-full flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-4 lg:h-auto lg:w-1/2">
          {/* Your Name */}
          <div className="relative">
            <User className="absolute left-2 top-[1.6rem] w-4 text-black" />
            <Label className="flex flex-col" htmlFor="name">
              * Your Name
              <Input
                className={`mt-1 rounded-md py-2 pl-8 text-black outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary 
                  ${true ? 'bg-white' : 'bg-gray-200'}
                `}
                id="name"
                type="text"
                placeholder="Ibn Rushd"
                // {...register('name', { required: true })}
              />
              {/* {errors.name && (
                <span className="text-red-500">This field is required</span>
              )} */}
            </Label>
          </div>

          {/* Your Email */}
          <div className="relative">
            <Mail className="absolute left-2 top-[1.6rem] w-4 text-black" />
            <Label className="flex flex-col" htmlFor="email">
              * E-Mail
              <Input
                className={`mt-1 rounded-md py-2 pl-8 text-black outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary 
                  ${true ? 'bg-white' : 'bg-gray-200'}
                `}
                id="email"
                type="email"
                placeholder="mansa@musa.com"
                name="_replyto"
                // {...register('email', { required: true })}
              />
              {/* {errors.email && (
                <span className="text-red-500">This field is required</span>
              )} */}
            </Label>
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-2 top-[1.6rem] w-4 text-black" />
            <Label className="flex flex-col" htmlFor="phone">
              Phone
              <Input
                className={`mt-1 rounded-md py-2 pl-8 text-black outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary 
                  ${true ? 'bg-white' : 'bg-gray-200'}
                `}
                id="phone"
                type="tel"
                placeholder="123-456-7890"
                // {...register('email', { required: true })}
              />
              {/* {errors.email && (
                <span className="text-red-500">This field is required</span>
              )} */}
            </Label>
          </div>
        </div>

        <div className="flex h-52 flex-col lg:h-auto lg:w-1/2">
          <label className="flex h-full flex-col" htmlFor="message">
            * Message
            <Textarea
              className={`mt-1 h-full rounded-md px-4 py-2 text-black outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary 
                ${true ? 'bg-white' : 'bg-gray-200'}
              `}
              id="message"
              // type="text"
              placeholder="Write your message here..."
              // {...register('message', { required: true })}
              // onBlur={handleBlur}
            />
            {/* {errors.message && (
              <span className="text-red-500">This field is required</span>
            )} */}
          </label>
        </div>
      </section>

      {/* Hidden form fields */}
      <input
        type="hidden"
        name="_subject"
        value="Contact from MyPrayerTimes.com"
      ></input>
      <input type="hidden" name="_honeypot" value="" />
      <input
        type="hidden"
        name="_confirmation"
        value="Your message has been sent. Thank you!"
      />

      {/* Submit button */}
      <section className="mx-auto w-fit">
        <Button
          className="rounded-md bg-green-dark p-4 text-white hover:bg-green-secondary"
          type="submit"
        >
          Send Message
        </Button>
      </section>
    </form>
  );
};

export default contactForm;
