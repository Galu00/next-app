import { Contato } from "@/app/contatos/types";
import { ButtonGroup } from "@/components/button";

export default function Contatos() {
  const contatos: Contato[] = [
    { id: 1, nome: "Gabriel", email: "gabriel@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
    { id: 3, nome: "João", email: "joao@email.com" },
  ];

  return (
    <div className="container mx-auto p-3">
      <h1 className="text-2xl font-bold mb-4">Lista de Contatos</h1>
      <table className="min-w-full bg-slate-600 border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {contatos.map((contato) => (
            <tr key={contato.id}>
              <td className="border px-4 py-4">{contato.id}</td>
              <td className="border px-4 py-2">{contato.nome}</td>
              <td className="border px-4 py-2">{contato.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-8">
        <ButtonGroup showEnviar={false} showVoltar={true} />
      </div>
    </div>
  );
}
