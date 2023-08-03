import { create } from "zustand";

class User {

    constructor(token, provider) {
        this.token = token;
        this.provider = provider;
    }
}

const createUserDataStore = create((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user: user })),
}))

export { User, createUserDataStore };