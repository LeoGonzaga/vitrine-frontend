import Image from "next/image";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import pharmacy from "../../../assets/phamacy.svg";
import Button from "../Button";

export const Details = (): JSX.Element => {
  return (
    <div
      className="shadow-lg shadow-zinc-50 
    p-4 rounded-md mb-3 flex flex-col items-center "
    >
      <div className="bg-[url('/blob.svg')] bg-no-repeat bg-contain">
        <Image src={pharmacy} alt="" />
      </div>
      <div>
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-xl font-semibold">Farmacia</h2>
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
      <div className="mt-6">
        <Button text="Entrar em contato" />
      </div>
    </div>
  );
};
