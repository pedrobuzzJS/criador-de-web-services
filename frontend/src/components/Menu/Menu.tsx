import React, { useState } from "react";

import { Container, ListaMenu } from "./styles";

const Menu: React.FC = () => {
    const [link, setLink] = useState();

    return (
        <Container>
            <ListaMenu>
                <li>
                    <a href="https://www.google.com" target="_blank">Google</a>
                </li>
                <li>
                    <a href="/pagea">Page A</a>
                </li>
                <li>
                    <a href="/pageb">Page B</a>
                </li>
            </ListaMenu>
        </Container>
    )
};

export default Menu;