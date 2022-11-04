import React, { useState,
    createContext,
    useContext,
    PropsWithChildren } 
from "react";

interface WebServiceState {
    table_id: number | null;
    webservice_id: number | null;
    setTableId: (table_id: number) => void;
    setWebServiceId: (webService_id: number) => void;
};

interface WebServiceProviderChildren extends PropsWithChildren {};

const WebServiceMountContext = createContext<WebServiceState>({} as WebServiceState);

export const WebServiceProvider: React.FC<WebServiceProviderChildren> = ({children}) => {
    const [ table_id, settable_id ] = useState<number | null>(null);
    const [ webService_id, setWebserviceId ] = useState<number | null>(null);

    function setWebServiceId(webService_id: number) {
        setWebserviceId(webService_id);
    };

    function setTId(tableId: number) {
        settable_id(tableId);
    };

    return (
        <WebServiceMountContext.Provider value={{
            table_id: table_id,
            webservice_id: webService_id,
            setTableId: setTId,
            setWebServiceId: setWebServiceId,
        }}>
            {children}
        </WebServiceMountContext.Provider>
    );
};

export function useWebServiceHook() {
    const context = useContext(WebServiceMountContext);
    return context;
}