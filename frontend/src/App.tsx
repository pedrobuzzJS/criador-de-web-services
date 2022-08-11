import React, { useEffect, useState } from "react";
import api from "./services/api";
import { useFetch } from "./hooks/useFetch";
// import { LinkMenu } from "../../@types/menu";
import Input from "./components/Inputs/InputDefault/InputDefault";

const App: React.FC = () => {
  const [ menu, setMenu ] = useState();
  const [data, isFetching, error] = useFetch("menu");

  console.log(data);

  return (
    <>
    </>
  )
};

export default App;