import zustand from "zustand";
import { Status } from "../@types/status";
interface State {
    status: any[];
    addStatus: (status: Status) => void;
}

const UseStatusStore = zustand<State>((set, get) => ({
    status: [],

    addStatus: (status: any) => {
        set(state => ({ status: [status] }))
    }
}));

export default UseStatusStore;