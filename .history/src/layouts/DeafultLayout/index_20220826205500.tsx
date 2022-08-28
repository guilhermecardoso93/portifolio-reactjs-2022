import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <main>
        <Outlet/>
      </main>
    </LayoutContainer>
  )
}