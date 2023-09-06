import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserType = {
  admin: {
    name: string;
    email: string;
    adminInfo: {
      last_login: string;
    };
  };
  token: string;
};

interface UserInterface {
  user: null | UserType;
  setUser: (user: UserType) => void;
  removeUser: () => void;
}

export const userSlice = create<UserInterface>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user: user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: "user", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
