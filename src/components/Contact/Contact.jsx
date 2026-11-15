import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [sendDisabled, setSendDisabled] = useState(false);
  const [submitButtonString, setSubmitButtonString] = useState("Submit");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("subject", "New Starbuck Curling Club Website Submission");
    formData.append("access_key", "827456ad-13d2-4dc3-9a5b-688b53c0be56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setSubmitButtonString("Sent!");
      event.target.reset();
      setSendDisabled(true);
    } else {
      console.log("Error", data);
      setSubmitButtonString("Error! Try again");
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-60 bg-starbuck"
    >
      <div className="w-full max-w-7xl bg-starbuck px-16 py-8 rounded-md">
        {/* Title */}
        <h3 className="text-center text-2xl font-bold tracking-wide">
          GET IN TOUCH WITH US
        </h3>
        <div className="mx-auto mt-2 mb-5 h-1 w-60 bg-amber-900" />

        {/* FORM */}
        <form className="space-y-2" onSubmit={onSubmit}>
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">*Name</label>
              <input
                type="text"
                name="Name"
                className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white"
                required
              />
            </div>

            {/* Subject list */}
            <div>
              <label className="block mb-2">*Subject</label>
              <select
                name="Subject"
                className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a subject...
                </option>
                <option value="Mens curling inquiry">Men's Curling</option>
                <option value="Womens curling inquiry">Women's Curling</option>
                <option value="Special curling events">
                  Glow Curling & Special Nights
                </option>
                <option value="Bonspiels and Tournaments">
                  Bonspiels & Tournaments
                </option>
                <option value="Ice Rental">Ice Rental</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2">*Email</label>
              <input
                type="email"
                name="Email"
                className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2">Phone Number</label>
              <input
                type="tel"
                name="Phone"
                className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2">*Message</label>
            <textarea
              rows={5}
              name="Message"
              className="w-full rounded-sm px-3 py-1 focus:outline-none border bg-white"
              required
            />
          </div>

          {/* Hidden form name */}
          <input
            type="hidden"
            name="from_name"
            value="Starbuck Curling Club Website"
          />

          {/* Submit */}
          <div className="flex justify-center pt-3 pb-4">
            <button
              type="submit"
              disabled={sendDisabled}
              className="px-8 py-2 w-45 bg-amber-900 enabled:hover:bg-amber-800 disabled:opacity-50 text-white rounded-sm transition"
            >
              {submitButtonString}
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="max-w-6xl mx-auto font-bold grid grid-cols-1 lg:grid-cols-5">
          <div className="flex items-center lg:justify-center gap-1.5 col-span-1">
            <Phone className="w-5 h-5 text-dark-text" />
            <p>(204) 735-2463</p>
          </div>

          <div className="flex items-center lg:justify-center gap-1.5 col-span-2 py-2">
            <Mail className="w-5 h-5 text-dark-text" />
            <p>starbuckmenscurling@gmail.com</p>
          </div>

          <div className="flex items-center lg:justify-center gap-1.5 col-span-2">
            <MapPin className="w-5 h-5 text-dark-text" />
            <p>60 Arena Blvd, Starbuck, MB R0G 2P0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
