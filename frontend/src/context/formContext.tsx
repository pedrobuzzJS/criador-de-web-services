import React, {
    useState,
    createContext,
    useContext,
    PropsWithChildren
} from "react";

interface FormState {
    change: object | null;
    setChangeState: (e: any) => void;
    getEvent: () => any;
};

interface FormChildren extends PropsWithChildren {};

const FormContex = createContext<FormState>({} as FormState);

export const FormProvider: React.FC<FormChildren> = ({children}) => {
    const [ changeState, setCahngeState ] = useState<React.FormEvent | any>();

    function change(e: any) {
        setCahngeState(e);
    };

    function getEvent() {
        return changeState;
    };

    return (
        <FormContex.Provider value={{
            change: {},
            setChangeState: change,
            getEvent: getEvent
        }}>
            {children}
        </FormContex.Provider>
    );
};

export function useForm() {
    const context = useContext(FormContex);
    return context;
};