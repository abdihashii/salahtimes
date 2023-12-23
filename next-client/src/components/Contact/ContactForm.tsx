'use client';

import { CheckCircle, Mail, Phone, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { signInFormSchema } from '@/schemas';

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    setFormSubmitted(true);
  };

  return formSubmitted ? (
    <section className="mx-auto flex h-[414px] w-10/12 items-center justify-center rounded-xl border border-green-dark p-7 text-green-dark lg:w-5/12">
      <CheckCircle className="h-48 w-48 text-green-secondary" />
    </section>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-10/12 space-y-8 rounded-xl border border-gray-500 p-7 lg:w-5/12"
    >
      <section>
        <h3 className="text-lg font-bold">Contact Form</h3>
        <p className="text-sm">Required fields are marked with an asterisk*</p>
      </section>

      <section className="flex w-full flex-col gap-10 lg:flex-row">
        {/* Left side form inputs */}
        <div className="flex flex-col gap-4 lg:h-auto lg:w-1/2">
          {/* Your Name */}
          <div className="relative flex flex-col gap-2">
            <User className="absolute left-2 top-[2.1rem] w-4" />
            <Label htmlFor="name">* Your Name</Label>
            <Input
              className={`mt-1 rounded-md py-2 pl-8 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary`}
              id="name"
              type="text"
              placeholder="Ibn Rushd"
              {...register('name')}
            />
            <p className="text-xs text-red-500">
              {errors.name?.message?.toString()}
            </p>
          </div>

          {/* Your Email */}
          <div className="relative flex flex-col gap-2">
            <Mail className="absolute left-2 top-[2.1rem] w-4" />
            <Label htmlFor="email">* E-Mail</Label>
            <Input
              className={`mt-1 rounded-md py-2 pl-8 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary`}
              id="email"
              type="email"
              placeholder="mansa@musa.com"
              {...register('email')}
              // name="_replyto"
            />
            <p className="text-xs text-red-500">
              {errors.email?.message?.toString()}
            </p>
          </div>

          {/* Phone */}
          <div className="relative flex flex-col gap-2">
            <Phone className="absolute left-2 top-[2.1rem] w-4" />
            <Label htmlFor="phone">Phone</Label>
            <Input
              className={`mt-1 rounded-md py-2 pl-8 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary`}
              id="phone"
              type="tel"
              placeholder="123-456-7890"
              {...register('phone')}
            />
            <p className="text-xs text-red-500">
              {errors.phone?.message?.toString()}
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="flex h-52 flex-col gap-2 lg:h-auto lg:w-1/2">
          <Label htmlFor="message">* Message</Label>
          <Textarea
            className={`mt-1 h-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary`}
            id="message"
            placeholder="Write your message here..."
            {...register('message')}
          />
          <p className="text-xs text-red-500">
            {errors.message?.message?.toString()}
          </p>
        </div>
      </section>

      {/* Hidden form fields */}
      {/* <input
        type="hidden"
        name="_subject"
        value="Contact from MyPrayerTimes.com"
      ></input>
      <input type="hidden" name="_honeypot" value="" />
      <input
        type="hidden"
        name="_confirmation"
        value="Your message has been sent. Thank you!"
      /> */}

      {/* Submit button */}
      <section className="mx-auto w-fit">
        <Button
          className="rounded-full bg-green-dark p-4 text-white hover:bg-green-secondary"
          type="submit"
        >
          Send Message
        </Button>
      </section>
    </form>
  );
};

export default ContactForm;
