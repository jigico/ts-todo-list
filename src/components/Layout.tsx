import React, { PropsWithChildren } from "react";
import { Layout1200 } from "./Layout.style";

export const Layout = ({ children }: PropsWithChildren) => {
  return <Layout1200>{children}</Layout1200>;
};
