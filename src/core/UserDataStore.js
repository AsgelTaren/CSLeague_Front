import { create } from "zustand";

const createUserDataStore = create((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user: user })),
}))

export { createUserDataStore };