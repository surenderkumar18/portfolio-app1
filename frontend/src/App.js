import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import History from "./pages/History";
import NotFound from "./pages/NotFound";
import Actions from "./pages/Actions";
import AddPositionForm from "./components/AddPositionForm";
import EditPositionForm from "./components/EditPositionForm";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/history' element={<History />} />
            <Route path='/actions' element={<Actions />} />
            <Route path='/positions/add' element={<AddPositionForm />} />
            <Route path='/positions/edit/:id' element={<EditPositionForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
