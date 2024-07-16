import { createContext } from "react";
import { useActiveId } from "../lib/hooks";

type ActiveIdContext = {
  activeId: number | null;
};

export const ActiveIdContext = createContext<ActiveIdContext | null>(null);

function ActiveIdContextProvider({ children }: { children: React.ReactNode }) {
  const activeId = useActiveId();

  return (
    <ActiveIdContext.Provider
      value={{
        activeId,
      }}
    >
      {children}
    </ActiveIdContext.Provider>
  );
}
export default ActiveIdContextProvider;
