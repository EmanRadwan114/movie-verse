"use client";

import { AppStore, makeStore } from "@/redux-toolkit/store";
import React, { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

interface IProps {
  children: ReactNode;
}

const StoreProvider: React.FC<IProps> = ({ children }) => {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
