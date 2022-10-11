import create from 'zustand'
import { Coluna } from '../@types/coluna'

type State = {
    colunas: Coluna[];
    addColuna: (coluna: Coluna) => void;
    setColuna: (coluna: Coluna) => void;
    deleteColuna: (colunaId: any) => void;
};

const UseColunaStore = create<State>((set) => ({
    colunas: [],
    addColuna: async (coluna: Coluna) => {
        await set((state) => ({ colunas: [...state.colunas, coluna] }));
    },
    setColuna: async (coluna: Coluna) => {
        await set((state) => ({colunas: [coluna]}));
    },
    deleteColuna: async (colunaId: any) => {
        await set((state) => ({ colunas: [...state.colunas.filter(item => item.id != colunaId)] }));
    }
}));

export default UseColunaStore;