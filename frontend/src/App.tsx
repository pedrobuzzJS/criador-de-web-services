import React, { useState, useCallback } from "react";
import Input from "./components/Inputs/InputDefault";
// import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles"

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
    <>
      <Input
        spanText="E-mail"
        // prefix="E-mail"
        name="email"
        type="email"
        placeholder="E-mail"
        onChange={handleChange}
      />

      <button className="button" onClick={() => console.log(usuario)}>
        Salvar
      </button>
      <GlobalStyles />
    </>
  )
};

export default App;