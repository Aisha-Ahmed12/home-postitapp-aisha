import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "reactstrap";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Container fluid>
      <Router>
        <Row>
          <Header />
        </Row>
        <Row className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Register" element={<Register />}></Route>
          </Routes>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Router>
    </Container>
  );
};

export default App;
