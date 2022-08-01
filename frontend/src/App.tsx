import React from "react";
// import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";

// interface Usuario {
//   cep: string;
//   cpf: string;
//   price: string;
// }

const App: React.FC = () => {
  // const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  // const handleChange = useCallback(
  //   (e: React.FormEvent<HTMLInputElement>) => {
  //     setUsuario({
  //       ...usuario,
  //       [e.currentTarget.name]: e.currentTarget.value,
  //     })
  //   },
  //   [usuario]
  // )

  return (
    <>
      <Menu />
    </>
  )
};

export default App;