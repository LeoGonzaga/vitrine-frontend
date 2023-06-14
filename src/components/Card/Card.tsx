import React from "react";
import Image from "next/image";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

import pharmacy from "../../../assets/phamacy.svg";

interface ICard {
  name: string;
}

export const Card = ({ name }: ICard): JSX.Element => {
  return (
    <div className="shadow-lg shadow-zinc-50 p-4 max-w-lg rounded-md mb-3 flex justify-between cursor-pointer">
      <div>
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-xs text-green-500">Aberto agora</p>
        </div>
        <div className="pt-1 text-xs flex gap-2 max-w-sm">
          <HiOutlineLocationMarker size={20} color="#729EFF" />
          <div>
            <p className="font-bold">Endereço</p>
            <p className="text-[#968D8D]">Rua das Flores, 123</p>
            <p className="text-[#968D8D]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>
        <div className="pt-1 text-xs flex gap-2">
          <AiOutlineClockCircle size={20} color="#729EFF" />
          <div>
            <p className="font-bold">Horário de funcionamento</p>
            <p className="text-[#968D8D]">8h as 18h</p>
            <p className="text-[#968D8D]">Sábado e domingo: 8h as 18h</p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/blob.svg')] bg-no-repeat bg-contain">
        <Image src={pharmacy} alt="" />
      </div>
    </div>
  );
};
