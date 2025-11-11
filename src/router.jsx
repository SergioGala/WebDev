import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from "./components/Layout/Layout"  // Ajusta la ruta según donde tengas tu Layout
import LandingPage from "./pages/LandingPage"
import NotFoundPage from "./pages/NotFoundPage"

const LayoutWrapper = ({ children }) => {
  return <Layout>{children}</Layout>
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route 
        path="/" 
        element={
          <LayoutWrapper>
            <LandingPage />
          </LayoutWrapper>
        } 
      />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
)