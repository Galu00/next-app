"use client";

import { useRouter } from "next/navigation";
import { ButtonGroupProps } from "./types";

export function ButtonGroup({
  showEnviar = true,
  showVoltar = true,
  page = "/",
}: ButtonGroupProps) {
  const router = useRouter();

  const handleClickEnviar = () => {
    router.push(page);
  };

  const handleClickVoltar = () => {
    router.back();
  };

  return (
    <div className="flex justify-center items-center">
      {showEnviar && (
        <button
          onClick={handleClickEnviar}
          className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-slate-600 transition"
        >
          Buscar Solicitações
        </button>
      )}
      {showVoltar && (
        <button
          onClick={handleClickVoltar}
          className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-slate-600 transition"
        >
          Voltar
        </button>
      )}
    </div>
  );
}
