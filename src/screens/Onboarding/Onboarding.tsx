import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Onboarding = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="w-[430px] h-[932px] relative bg-white rounded-[30px] overflow-hidden">
      <img
        className="absolute w-[430px] h-[932px] top-0 left-0"
        alt="Onboarding"
        src="https://c.animaapp.com/majzuovzdPDWv4/img/onboarding.png"
      />
      <Button
        className="absolute w-[370px] h-[57px] bottom-[107px] left-[33px] bg-[#304ffe] rounded-[30px] hover:bg-[#304ffe]/90"
        onClick={() => navigate("/choose-country")}
      >
        <span className="[font-family:'Impact-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          Next
        </span>
      </Button>
      <Button
        className="absolute top-4 right-4 bg-transparent hover:bg-transparent"
        onClick={() => navigate("/choose-country")}
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </Button>
    </div>
  );
};
