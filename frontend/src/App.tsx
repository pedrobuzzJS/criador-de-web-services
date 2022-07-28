import React from "react";
import { Menu } from "./components/Menu/styles";
import GlobalStyles from "./styles/GlobalStyles";

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
      <GlobalStyles />
    </>
  )
};

export default App;