import create from 'zustand'

interface State {
    path: string[] | null;
    changePath: (path: string) => void;
    cleanPath: () => void;
};

const useMenuStore = create<State>((set) => (
        {
            path: [],
            changePath: async (path: string) => {
                await set(state => ({ path: [path] }));
            },
            cleanPath: async () => {
                await set(state => ({ path: null }));
            }
        }
    )
);

export default useMenuStore;