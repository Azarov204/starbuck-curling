import {useState} from "react";
import {Mail, MapPin, Phone} from "lucide-react";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="flex justify-center items-center min-h-60 bg-starbuck">
      <div className="w-full max-w-6xl bg-starbuck p-10 rounded-md">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold tracking-wide">
          GET IN TOUCH WITH US
        </h2>
        <div className="mx-auto mt-2 mb-5 h-1 w-60 bg-amber-900"/>

        {/* FORM */}
        <form className="space-y-2" onSubmit={onSubmit}>
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">
                *First Name
              </label>
              <input type="text" className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white"/>
            </div>

            <div>
              <label className="block mb-2">
                *Last Name
              </label>
              <input type="text" className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white"/>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">
                *Email
              </label>
              <input type="email" className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white"/>
            </div>

            <div>
              <label className="block mb-2">
                *Phone Number
              </label>
              <input type="tel" className="w-full h-10 rounded-sm px-3 focus:outline-none border bg-white"/>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2">
              *Message
            </label>
            <textarea rows={6} className="w-full rounded-sm px-3 py-2 focus:outline-none border bg-white"/>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-3 pb-8">
            <button className="px-8 py-2 bg-amber-900 hover:bg-amber-800 text-white rounded-sm transition">
              Submit
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="max-w-6xl mx-auto space-y-2 font-bold grid grid-cols-1 md:grid-cols-5">
          <div className="flex items-center gap-2 col-span-1">
            <Phone className="w-5 h-5 text-dark-text"/>
            <span>(123) 222-2222</span>
          </div>

          <div className="flex items-center gap-2 col-span-2">
            <Mail className="w-5 h-5 text-dark-text"/>
            <span>starbuck-curling@example.com</span>
          </div>

          <div className="flex items-center gap-2 col-span-2">
            <MapPin className="w-5 h-5 text-dark-text"/>
            <span>60 Arena Blvd, Starbuck, MB R0G 2P0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;