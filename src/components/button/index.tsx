"use client";

import { useRouter } from "next/navigation";

export function ButtonGroup({ showEnviar = true, showVoltar = true }) {
  const router = useRouter();

  const handleClickEnviar = () => {
    router.push("/contatos");
  };

  const handleClickVoltar = () => {
    router.back();
  };

  return (
    <div className="flex justify-center items-center">
      {showEnviar && (
        <button
          onClick={handleClickEnviar}
          className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      )}
      {showVoltar && (
        <button
          onClick={handleClickVoltar}
          className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Voltar
        </button>
      )}
    </div>
  );
}
