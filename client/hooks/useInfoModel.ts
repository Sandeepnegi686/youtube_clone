import { create } from "zustand";

export interface ModelStoreInterface {
  movieId?: string;
  isOpen: boolean;
  openModel: (movieId: string) => void;
  closeModel: () => void;
}

export const useModel = create<ModelStoreInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModel: (movieId: string) => {
    console.log(movieId);
    set({ isOpen: true, movieId });
  },
  closeModel: () => set({ isOpen: false, movieId: undefined }),
}));

export default useModel;
