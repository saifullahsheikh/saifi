import React, { useState } from "react";

export default function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Append access key for Web3Forms API
    formData.append("access_key", "7bc79e54-1ca0-4a93-8c08-900b81f4eaeb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An unexpected error occurred.");
    }
  };

  return (
    <form 
      onSubmit={onSubmit}
      className="bg-white"
      
    >
      <div id="contact" className="px-10 max-md:px-5 py-10">
        <h1 className="text-4xl font-semibold">Let’s start a project together</h1>
        <div className="mt-5 text-[#444]">Fill the Form Below:</div>

        <div className="flex flex-col gap-3 py-10">
          {/* Name and Company */}
          <div className="flex items-center max-md:items-start max-md:flex-col w-full gap-2">
            <div className="text-4xl text-[#212121] max-md:text-2xl max-md:w-full flex max-md:flex-col grow gap-2">
              Hi! My name is
              <input
                type="text"
                name="name"
                required
                className="grow border-b-2 text-sm px-5 py-2 max-md:text-start text-center border-[#c5a3a3] max-md:px-0 bg-[#fff] outline-0"
                placeholder="Enter Your Name*"
              />
            </div>
            <div className="text-4xl max-md:w-full max-md:text-2xl text-[#212121] flex max-md:flex-col grow gap-2">
              and I work with
              <input
                type="text"
                placeholder="Company name"
                name="from_company_name"
                className="max-md:px-0 grow border-b-2 text-sm px-5 py-2 text-center max-md:text-start border-[#c5a3a3] bg-[#fff] outline-0"
              />
            </div>
          </div>

          {/* Goal */}
          <div className="text-4xl max-md:text-2xl text-[#212121] max-md:flex-col flex gap-2">
            I’m seeking a collaborative partner to assist me with
            <input
              type="text"
              placeholder="Your goal type here"
              name="from_your_goal"
              className="max-md:px-0 grow border-b-2 text-sm px-5 py-2 text-center max-md:text-start border-[#c5a3a3] bg-[#fff] outline-0"
            />
          </div>

          {/* Completion Date */}
          <div className="text-4xl max-md:text-2xl text-[#212121] max-md:flex-col flex gap-2">
            With an idea of having that completed
            <input
              type="date"
              placeholder="Date"
              name="from_date"
              className="max-md:px-0 grow border-b-2 text-sm px-5 py-2 text-center max-md:text-start border-[#c5a3a3] bg-[#fff] outline-0"
            />
          </div>

          {/* Budget */}
          <div className="text-4xl max-md:text-2xl text-[#212121] flex max-md:flex-col gap-2">
            I’m aiming to stay within a budget range of
            <select
              name="from_budjet"
              id=""
              required
              className="grow border-b-2 text-sm px-5 py-2 max-md:text-start text-center max-md:px-0 border-[#c5a3a3] bg-[#fff] outline-0"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="$200 to $1000">$200 to $1000</option>
              <option value="$1000 to $2000">$1000 to $2000</option>
              <option value="More than $2000">More than $2000</option>
            </select>
          </div>

          {/* Email */}
          <div className="text-4xl max-md:text-2xl text-[#212121] flex max-md:flex-col gap-2">
            You can reach me at
            <input
              type="email"
              name="email"
              required
              placeholder="honry@gmail.com*"
              className="border-b-2 max-md:px-0 text-sm px-5 py-2 max-md:text-start text-center border-[#c5a3a3] grow bg-[#fff] outline-0"
            />
            to start the conversation.
          </div>

          {/* Message */}
          <div className="text-4xl max-md:text-2xl text-[#212121] flex max-md:flex-col w-full">
            Optionally, I’m sharing more:
            <input
              type="text"
              name="message"
              placeholder="Product Detail Type Here"
              className="ml-2 border-b-2 text-sm px-5 py-2 text-center max-md:px-0 max-md:text-start border-[#c5a3a3] bg-[#fff] outline-0 grow"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="py-3 px-10 bg-[#212121] hover:bg-transparent hover:text-black border-[1px] border-zinc-900 text-white mt-5"
            >
              Send Detail
            </button>
          </div>

          {/* Result Message */}
          <span>{result}</span>
        </div>
      </div>
    </form>
  );
}
