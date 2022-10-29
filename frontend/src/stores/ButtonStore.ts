import create from 'zustand'
import { FieldAction } from "../Utils/FieldAction";

interface State {
    button: FieldAction[] | null;
    addButton: (button: FieldAction) => void;
    cleanButton: () => void;
};

const useButtonStore = create<State>((set) => (
        {
            button: [],
            addButton: async (button: FieldAction) => {
                await set(state => ({ button: [button] }));
            },
            cleanButton: async () => {
                await set(state => ({ button: null }));
            }
        }
    )
);

export default useButtonStore;