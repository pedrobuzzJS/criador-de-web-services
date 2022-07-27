import React, { useCallback, useState } from "react";
import Input from "./components/Inputs/InputDefault";
// import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";

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
      <Input
        spanText="CEP"
        // prefix="CEP"
        name="cep"
        type="cep"
        placeholder="CEP"
        onChange={handleChange}
      />
      <Input
        spanText="CPF"
        // prefix="CPF"
        name="cpf"
        type="cpf"
        placeholder="CPF"
        onChange={handleChange}
      />
      <Input
        spanText="Password"
        // prefix="E-mail"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <Input
        spanText="File"
        // prefix="E-mail"
        name="file"
        type="file"
        placeholder="File"
        onChange={handleChange}
      />

      <button className="button" onClick={() => console.log(usuario)}>
        Enviar
      </button>
      <GlobalStyles />
    </>
  )
};

export default App;