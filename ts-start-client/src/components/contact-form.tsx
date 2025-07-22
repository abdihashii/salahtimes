import { MailIcon, PhoneIcon, UserIcon } from "lucide-react";
import { useForm, useFormState } from "react-hook-form";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  const {
    register,
    formState: { errors },
    control,
    resetField,
    getValues,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const { dirtyFields } = useFormState({ control });

  const handleBlur = ({ target: { id, value } }) => {
    if (value && getValues(id).length === 0) {
      resetField(id);
    }
  };

  return (
    <form
      action="#"
      method="POST"
      target="_blank"
      className="mx-auto flex w-5/6 flex-col gap-7 rounded-xl border border-green-dark bg-white p-7 text-black lg:w-5/12"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">Contact Form</h3>
        <p className="text-sm">Required fields are marked with an asterisk*</p>
      </div>

      {/* Form inputs */}
      <div className="flex w-full flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-1/2">
          {/* Your Name */}
          <div className="relative">
            <UserIcon className="absolute top-10 left-2.5" />
            <label className="flex flex-col" htmlFor="name">
              * Your Name
              <input
                className={`mt-1 rounded-md py-2 pl-8 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary 
                  ${dirtyFields.name ? "bg-white" : "bg-gray-200"}
                `}
                id="name"
                type="text"
                placeholder="Ibn Rushd"
                {...register("name", { required: true })}
              ></input>
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </label>
          </div>

          {/* Your Email */}
          <div className="relative">
            <MailIcon className="absolute top-10 left-2.5" />
            <label className="flex flex-col" htmlFor="email">
              * E-Mail
              <input
                className={`mt-1 rounded-md py-2 pl-8 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary 
                  ${dirtyFields.email ? "bg-white" : "bg-gray-200"}
                `}
                id="email"
                type="email"
                placeholder="mansa@musa.com"
                // name="_replyto"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <PhoneIcon className="absolute top-10 left-2.5" />
            <label className="flex flex-col" htmlFor="phone">
              Phone
              <input
                className={`mt-1 rounded-md py-2 pl-8 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary 
                  ${dirtyFields.phone ? "bg-white" : "bg-gray-200"}
                `}
                id="phone"
                type="tel"
                placeholder="123-456-7890"
                {...register("phone")}
              />
            </label>
          </div>
        </div>
        <div className="flex h-52 flex-col lg:h-auto lg:w-1/2">
          <label className="flex h-full flex-col" htmlFor="message">
            * Message
            <textarea
              className={`mt-1 h-full rounded-md py-2 px-4 outline-none ring-1 ring-gray-500 hover:ring-green-secondary focus-visible:ring-2 focus-visible:ring-green-secondary 
                ${dirtyFields.message ? "bg-white" : "bg-gray-200"}
              `}
              id="message"
              // type="text"
              placeholder="Write your message here..."
              {...register("message", { required: true })}
              onBlur={handleBlur}
            />
            {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>
        </div>
      </div>

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
      <Button className="h-fit w-full rounded-md bg-[#006307] p-4 text-white hover:bg-[#0A8337] lg:w-fit lg:mx-auto">
        Send Message
      </Button>
    </form>
  );
}
