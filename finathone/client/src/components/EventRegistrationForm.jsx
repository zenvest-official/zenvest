import React, { useState } from "react";
import {
  FaUser,
  FaRegEnvelope,
  FaWhatsapp,
  FaMale,
  FaFemale,
  FaGenderless,
} from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa6";

function EventRegistrationForm({submit}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    regNumber: "",
    gender: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formData);
  };
  return (
    <div className="flex flex-col items-center justify-center my-auto">
      <div className="bg-white w-full max-w-lg md:max-w-md p-8 rounded-3xl shadow-lg font-normal">
        <div className="">
          <h1 className="text-2xl font-semibold text-center text-blue mb-6 w-full">
            Registration Form
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative items-center flex justify-center">
            <FaUser className="absolute left-3 text-blue text-xl" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`pl-10 w-full py-3 rounded-lg border border-gray-300 ${
                formData.name === "" ? "outline-red-600" : "outline-green"
              }`}
              required
            />
          </div>

          <div className="relative items-center justify-center flex">
            <FaRegIdCard className="absolute left-3 text-[#3e688c] text-xl" />
            <input
              type="text"
              name="regNumber"
              value={formData.regNumber}
              onChange={handleChange}
              placeholder="Registration Number"
              className={`pl-10 w-full py-3 rounded-lg border border-gray-300 ${
                formData.regNumber === "" ? "outline-red-600" : "outline-green"
              }`}
              required
            />
          </div>

          <div className="relative items-center justify-center flex">
            <FaRegEnvelope className="absolute left-3 text-[#3e688c] text-xl" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`pl-10 w-full py-3 rounded-lg border border-gray-300 ${
                formData.email === "" ? "outline-red-600" : "outline-green"
              }`}
              required
            />
          </div>

          <div className="relative items-center justify-center flex">
            <FaWhatsapp className="absolute left-3 text-[#03a63c] text-xl" />
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="WhatsApp Number"
              className={`pl-10 w-full py-3 rounded-lg border border-gray-300 ${
                formData.number === "" ? "outline-red-600" : "outline-green"
              }`}
              required
            />
          </div>

          <div className="flex gap-1 md:gap-2 p-1 md:p-2 flex-wrap justify-center w-full">
            <div>
              <input
                className="peer sr-only"
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              <label
                htmlFor="male"
                className="flex w-20 md:w-24 cursor-pointer border-2 border-gray-300 md:flex-col items-center justify-center rounded-xl bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:bg-[#347dc1] text-gray-500 peer-checked:text-white peer-checked:border-0"
              >
                <FaMale className="text-3xl" />
                <span className="text-sm uppercase">
                  Male
                </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              <label
                htmlFor="female"
                className="flex w-20 md:w-24 cursor-pointer border-2 border-gray-300 md:flex-col items-center justify-center rounded-xl bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-[#a3386c] peer-checked:bg-[#a3386c] text-gray-500 peer-checked:text-white peer-checked:border-0"
              >
                <FaFemale className="text-3xl" />
                <span className="text-sm uppercase">
                  Female
                </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleChange}
              />
              <label
                htmlFor="other"
                className="flex w-24 cursor-pointer border-2 border-gray-300 md:flex-col items-center justify-center rounded-xl bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-[#bfa5be] peer-checked:bg-[#bfa5be] text-gray-500 peer-checked:text-white peer-checked:border-0"
              >
                <FaGenderless className="text-3xl" />
                <span className="text-sm uppercase">
                  Other
                </span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#3e688c] hover:bg-[#5ba66e] text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventRegistrationForm;
