import { userSchemaValidation } from "../Validation/UserValidation";
import { FaTrash, FaEdit } from "react-icons/fa";
//import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser } from "../Features/UserSlice";
import { date } from "yup";

const Register = () => {
  const userList = useSelector((state) => state.users.value);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const {
    register,

    handleSubmit, // Submit the form when this is called

    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    try {
      const userData = {
        name: data.name,
        email: date.email,
        password: data.password,
      };
      console.log("Form Data", data); // You can handle the form submission here
      alert("Validation all good.");
      dispatch(addUser(userData));
    } catch (error) {
      console.log("Error.");
    }
  };
  const handleDelete = (email) => {
    dispatch(deleteUser(email));
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
            <input
              type="text"
              name="name"
              {...register("name", {
                value: name,
                onChange: (e) => setname(e.target.value),
              })}
            ></input>
            {name}
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <input
              type="email"
              name="email"
              {...register("email", {
                value: email,
                onChange: (e) => setemail(e.target.value),
              })}
            ></input>
            {email}
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
              {...register("password", {
                value: password,
                onChange: (e) => setpassword(e.target.value),
              })}
            ></input>
            {password}
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmPassword", {
                value: confirmPassword,
                onChange: (e) => setconfirmPassword(e.target.value),
              })}
            ></input>
            {confirmPassword}
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button type="submit">Register</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col md={6}>
          <h1>List of Users</h1>
          <table className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <div className="d-flex gap-2">
                    <td>
                      <Button
                        color="danger"
                        onClick={() => handleDelete(user.email)}
                      >
                        <FaTrash />{" "}
                      </Button>{" "}
                    </td>
                    <td>
                      {" "}
                      <Button color="success">
                        <FaEdit />
                      </Button>{" "}
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
