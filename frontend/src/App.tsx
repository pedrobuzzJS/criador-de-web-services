import React, { useState, useCallback } from "react";
import Input from "./components/Inputs/InputDefault";

interface Usuario {
  cep: string;
  cpf: string;
  price: string;
}

const App: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setUsuario({
        ...usuario,
        [e.currentTarget.name]: e.currentTarget.value,
      })
    },
    [usuario]
  )

  return (
    <div>
      {/* <span>Senha</span> */}
      <Input
        spanText="span bem sucedido"
        name="Teste"
        type="text"
        onChange={handleChange}
        placeholder="99999-999"
      />

      <button className="button" onClick={() => console.log(usuario)}>
        Salvar
      </button>
    </div>
  )
};

export default App;