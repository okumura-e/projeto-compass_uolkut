import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FormPage from "./templates/FormPage";
import LoginForm from "./components/forms/LoginForm";
import FirstStepForm from "./components/forms/FirstStepForm";
import NewPasswordForm from "./components/forms/NewPassword";
import PerfilPage from "./templates/PerfilPage";
import ForgotPasswordForm from "./components/forms/ForgotPassword";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route index={false} path="/" element={<FormPage />}>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<FirstStepForm />} />
      <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      <Route path="/new-password" element={<NewPasswordForm />} />
    </Route>,
    <Route path="/profile" element={<PerfilPage />} />,
  ])
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
