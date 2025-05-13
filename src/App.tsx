import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { router } from "./router"
import MainLayout from "./layouts"
import DynamicTitle from "./utils/dynamicTitle"
const App = () => {
  return (
    <Router>
      <DynamicTitle />
      <Routes>
        <Route
          path="*"
          element={
            <Navigate
              to="/albums"
              replace
            />
          }
        />
        {router.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.component}</MainLayout>}
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App
