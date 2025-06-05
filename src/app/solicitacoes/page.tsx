"use client";

import { ISolicitacao } from "@/app/solicitacoes/types";
import { ButtonGroup } from "@/components/button";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Solicitacoes() {
  const [solicitacoes, setSolicitacoes] = useState<ISolicitacao[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedText, setEditedText] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        setSolicitacoes(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto p-3">
      <h1 className="text-2xl font-bold mb-4">Lista de Solicitações</h1>
      <table className="min-w-full bg-slate-600 border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Ação</th>
          </tr>
        </thead>
        <tbody>
          {solicitacoes.map((solicitacao, index) => (
            <tr key={solicitacao.id}>
              <td className="border px-4 py-4">{solicitacao.postId}</td>
              <td className="border px-4 py-2">
                {editIndex === index ? (
                  <input
                    className="text-black"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                ) : (
                  solicitacao.name
                )}
              </td>
              <td className="border px-4 py-2">{solicitacao.email}</td>
              <td className="border px-4 py-2">
                {editIndex === index ? (
                  <button
                    onClick={() => {
                      const newSolicitacoes = [...solicitacoes];
                      newSolicitacoes[index].name = editedText;
                      setSolicitacoes(newSolicitacoes);
                      setEditIndex(null);
                    }}
                    className="bg-black text-white px-2 py-1 rounded hover:bg-green-500 transition"
                  >
                    Salvar
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditIndex(index);
                      setEditedText(solicitacao.name);
                    }}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-black transition"
                  >
                    Editar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-8">
        <ButtonGroup showEnviar={false} showVoltar={true} page="/" />
      </div>
    </div>
  );
}
