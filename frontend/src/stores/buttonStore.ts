import zustand from "zustand";
import { FieldAction } from "../Utils/FieldAction";

interface State {
    button: FieldAction[];
    addButton: (button: FieldAction) => void;
};

const UseButtonStore = zustand<State>((set) => (
        {
            button: [],
            addButton: async (button: any) => {
                await set(state => ({ button: [button] }))
            }
        }
    )
);

export default UseButtonStore;