import {useState} from "react";
import {Mail, MapPin, Phone} from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [sendDisabled, setSendDisabled] = useState(false);
  const [submitButtonString, setSubmitButtonString] = useState("Submit");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("subject", "New Submission from Starbuck Curling Club Website");
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_EMAIL_KEY + "asd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setSubmitButtonString("Sent!")
      event.target.reset();
      setSendDisabled(true);
    } else {
      console.log("Error", data);
      setSubmitButtonString("Error! Try again")
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="flex justify-center items-center min-h-60 bg-starbuck">
      <div className="w-full max-w-6xl bg-starbuck px-10 py-6 rounded-md">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold tracking-wide">
          GET IN TOUCH WITH US
        </h2>
        <div className="mx-auto mt-2 mb-5 h-1 w-60 bg-amber-900"/>

        {/* FORM */}
        <form className="space-y-2" onSubmit={onSubmit}>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-2">
                *Name
              </label>
              <input type="text" name="Name"
                     className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white" required/>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2">
                *Email
              </label>
              <input type="email" name="Email"
                     className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white" required/>
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2">
                Phone Number
              </label>
              <input type="tel" name="Phone"
                     className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white"/>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2">
              *Message
            </label>
            <textarea rows={7} name="Message"
                      className="w-full rounded-sm px-3 py-1 focus:outline-none border bg-white" required/>
          </div>

          {/* Hidden form name */}
          <input type="hidden" name="from_name" value="Starbuck Curling Club Website"/>

          {/* Submit */}
          <div className="flex justify-center pt-3 pb-4">
            <button type="submit" disabled={sendDisabled}
                    className="px-8 py-2 w-45 bg-amber-900 enabled:hover:bg-amber-800 disabled:opacity-50 text-white rounded-sm transition">
              {submitButtonString}
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="max-w-6xl mx-auto space-y-2 font-bold grid grid-cols-1 md:grid-cols-5">
          <div className="flex items-center gap-1.5 col-span-1">
            <Phone className="w-5 h-5 text-dark-text"/>
            <span>(204) 735-2463</span>
          </div>

          <div className="flex items-center gap-1.5 col-span-2 md:pl-2">
            <Mail className="w-5 h-5 text-dark-text"/>
            <span>starbuckmenscurling@gmail.com</span>
          </div>

          <div className="flex items-center gap-1.5 col-span-2">
            <MapPin className="w-5 h-5 text-dark-text"/>
            <span>60 Arena Blvd, Starbuck, MB R0G 2P0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;