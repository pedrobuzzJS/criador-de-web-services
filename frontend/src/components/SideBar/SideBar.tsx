import React, { useState } from "react";

export const SideBar: React.FC = () => {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

    return <h1>SideBar</h1>
}