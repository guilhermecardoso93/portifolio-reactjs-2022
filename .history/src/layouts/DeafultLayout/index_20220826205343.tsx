import { Outlet } from "react-router-dom";
import DrawerAppBar, { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <DrawerAppBar/>
      <main>
        <Outlet/>
      </main>
    </LayoutContainer>
  )
}