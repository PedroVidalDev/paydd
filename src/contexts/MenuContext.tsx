import { MenuType } from "components/Menu/types";
import React, { createContext, useContext, useState } from "react";

interface MenuContextProps {
  type: MenuType;
  setType: (type: MenuType) => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [type, setType] = useState<MenuType>(MenuType.DEBT);

  return (
    <MenuContext.Provider value={{ type, setType }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu deve ser usado dentro de um MenuProvider");
  }
  return context;
};
