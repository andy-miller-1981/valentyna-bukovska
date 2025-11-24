import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useEffect } from "react";

function AppRouter() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/courses"} component={Courses} />
      <Route path={"/courses/:id"} component={CourseDetail} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  const routerBase = basePath === "" ? undefined : basePath;

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <Router base={routerBase}>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">
                <AppRouter />
              </main>
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
