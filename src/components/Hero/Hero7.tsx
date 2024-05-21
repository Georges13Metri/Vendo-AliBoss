import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Hero7 = () => {
  return (
    <div className="bg-white flex p-10 items-center flex-col">
      <h1 className="text-4xl font-bold mb-10 md:w-full lg:w-1/2 text-center">
        Vergleich: Vendo Smart-Kiosk vs. Traditionelle Automaten
      </h1>
      <table className="border-collapse border border-gray-400">
        <tbody>
          <tr>
            {/* Apply the border style only to the header cells */}
            <td className="border border-gray-400 p-2 w-2/3"></td>
            <td className="border border-gray-400 p-2">VendoSmart</td>
            <td className="border border-gray-400 p-2">Vending Machines</td>
          </tr>
          <tr>
            <td className="border-b border-gray-400 p-2 w-1/2">
              Easy to move / low weight
            </td>
            <td className="border-b border-gray-400 p-2 ">
              <FaCheckCircle />
              Lightweight (110 kg)
            </td>
            <td className="border-b border-gray-400 p-2">
              Heavy / Large (+350 kg)
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-400 p-2 w-1/2">
              Flexible merchandising format
            </td>
            <td className="border-b border-gray-400 p-2">
              <FaCheckCircle />
              Sell any product
            </td>
            <td className="border-b border-gray-400 p-2">
              Only pre-sized slots
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-400 p-2 w-1/2">
              Easy replenishment / cleaning
            </td>
            <td className="border-b border-gray-400 p-2">
              <FaCheckCircle />
              Fast: under 5 min
            </td>
            <td className="border-b border-gray-400 p-2">
              Difficult: many components
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-400 p-2 w-1/2">
              Easy to adjust / change products
            </td>
            <td className="border-b border-gray-400 p-2">
              <FaCheckCircle />
              Easy via “Drag & Drop”
            </td>
            <td className="border-b border-gray-400 p-2">
              Difficult configuration, requires special tools
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Hero7;
