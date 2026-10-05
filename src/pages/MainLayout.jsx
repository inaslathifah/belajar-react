import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppNavbar from "../component/AppNavbar";

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <AppNavbar />
      <main className="flex-grow-1 pb-4">
        <Container className="py-4">
          <Outlet />
        </Container>
      </main>
      <footer className="bg-white border-top py-3 text-muted text-center mt-auto">
        <Container className="text-center">
          <small>
            &copy; {new Date().getFullYear()} My App. All rights reserved.
          </small>
        </Container>
      </footer>
    </div>
  );
}
