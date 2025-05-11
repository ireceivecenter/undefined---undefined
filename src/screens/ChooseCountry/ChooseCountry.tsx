import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const countries = [
  { name: "Nigeria", top: 420, left: 185 },
  { name: "USA", top: 420, left: 85 },
  { name: "UK", top: 420, left: 285 },
  { name: "Canada", top: 320, left: 185 },
  { name: "Australia", top: 520, left: 185 },
  { name: "Germany", top: 420, left: 385 },
];

export const ChooseCountry = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState<string>("Nigeria");

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
  };

  const handleNext = () => {
    navigate("/instant-receive", { state: { country: selectedCountry } });
  };

  return (
    <div className="w-[430px] h-[932px] relative bg-white rounded-[30px] overflow-hidden">
      <img
        className="absolute w-[430px] h-[932px] top-0 left-0"
        alt="Choose your country"
        src="https://c.animaapp.com/majzuovzdPDWv4/img/choose-your-country.png"
      />
      {countries.map((country) => (
        <div
          key={country.name}
          className="absolute w-[61px] h-[61px] cursor-pointer"
          style={{ top: country.top, left: country.left }}
          onClick={() => handleCountrySelect(country.name)}
        >
          <img
            className={`w-full h-full object-cover rounded-full ${
              selectedCountry === country.name ? 'ring-4 ring-blue-500' : ''
            }`}
            alt={country.name}
            src={`https://c.animaapp.com/majzuovzdPDWv4/img/${country.name.toLowerCase()}-flag.png`}
          />
        </div>
      ))}
      <Button
        className="absolute w-[370px] h-[57px] bottom-[107px] left-[33px] bg-[#304ffe] rounded-[30px] hover:bg-[#304ffe]/90"
        onClick={handleNext}
      >
        <span className="[font-family:'Impact-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          Next
        </span>
      </Button>
      <Button
        className="absolute top-4 left-4 bg-transparent hover:bg-transparent"
        onClick={() => navigate("/")}
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </Button>
      <Button
        className="absolute top-4 right-4 bg-transparent hover:bg-transparent"
        onClick={handleNext}
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </Button>
    </div>
  );
};
