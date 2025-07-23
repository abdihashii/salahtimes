import { MailIcon, PhoneIcon, UserIcon } from "lucide-react";
import { useForm, useFormState } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const {
    register,
    formState: { errors },
    control,
    resetField,
    getValues,
    handleSubmit,
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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-5/6 flex-col gap-7 rounded-xl border border-[#006307] bg-white p-7 text-black lg:w-1/2"
    >
      {/* Form inputs */}
      <div className="flex w-full flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-1/2">
          {/* Your Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Your Name</Label>
            <div className="relative">
              <UserIcon className="absolute top-1/2 -translate-y-1/2 left-2.5 h-4 w-4 text-gray-500" />
              <Input
                className={`pl-8 ${dirtyFields.name ? "bg-white" : "bg-gray-200"}`}
                id="name"
                type="text"
                placeholder="Ibn Rushd"
                {...register("name", { required: true })}
              />
            </div>
            {errors.name && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Your Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">E-Mail</Label>
            <div className="relative">
              <MailIcon className="absolute top-1/2 -translate-y-1/2 left-2.5 h-4 w-4 text-gray-500" />
              <Input
                className={`pl-8 ${dirtyFields.email ? "bg-white" : "bg-gray-200"}`}
                id="email"
                type="email"
                placeholder="mansa@musa.com"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <div className="relative">
              <PhoneIcon className="absolute top-1/2 -translate-y-1/2 left-2.5 h-4 w-4 text-gray-500" />
              <Input
                className={`pl-8 ${dirtyFields.phone ? "bg-white" : "bg-gray-200"}`}
                id="phone"
                type="tel"
                placeholder="123-456-7890"
                {...register("phone")}
              />
            </div>
          </div>
        </div>
        <div className="flex h-52 flex-col overflow-hidden lg:h-auto lg:w-1/2">
          <Label className="flex h-full flex-col items-start" htmlFor="message">
            Message
            <Textarea
              className={`h-full px-4 max-w-full overflow-x-auto ${dirtyFields.message ? "bg-white" : "bg-gray-200"}`}
              style={{ fieldSizing: "normal" } as React.CSSProperties}
              id="message"
              placeholder="Write your message here..."
              {...register("message", { required: true })}
              onBlur={handleBlur}
            />
            {errors.message && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </Label>
        </div>
      </div>

      {/* Hidden form fields */}
      <Input
        type="hidden"
        name="_subject"
        value="Contact from MyPrayerTimes.com"
      />
      <Input type="hidden" name="_honeypot" value="" />
      <Input
        type="hidden"
        name="_confirmation"
        value="Your message has been sent. Thank you!"
      />

      {/* Submit button */}
      <Button
        type="submit"
        className="h-fit w-full rounded-md bg-[#006307] p-4 text-white hover:bg-[#0A8337] lg:w-fit lg:mx-auto"
      >
        Send Message
      </Button>
    </form>
  );
}
