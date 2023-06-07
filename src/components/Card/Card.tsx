import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

export const Card = (): JSX.Element => {
  return (
    <div className="shadow-lg p-4 max-w-lg rounded-md mb-3">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold">Farmacia</h2>
        <p className="text-xs text-green-500">Aberto agora</p>
      </div>
      <div className="pt-1 text-xs flex gap-2">
        <HiOutlineLocationMarker size={20} />
        <div>
          <p className="font-bold">Endereço</p>
          <p className="text-[#968D8D]">Rua das Flores, 123</p>
          <p className="text-[#968D8D]">Bairro da esperança</p>
        </div>
      </div>
      <div className="pt-1 text-xs flex gap-2">
        <AiOutlineClockCircle size={20} />
        <div>
          <p className="font-bold">Horário de funcionamento</p>
          <p className="text-[#968D8D]">Rua das Flores, 123</p>
        </div>
      </div>
    </div>
  );
};
