import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Title,
  FormWrapper,
  Container,
} from "./Login-styled.js";

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation(
    async (loginData) => {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        loginData
      );
      return response.data;
    },
    {
      onSuccess: () => {
        setIsAuthenticated(true);
        navigate("/adminDashboard");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };
  return (
    <Container>
      <FormWrapper>
        <Title>Admin Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </form>
        {mutation.isLoading && <p>Loading...</p>}
        {mutation.isError && <p>Error: {mutation.error.message}</p>}
        {mutation.isSuccess && <p>Login successful. Redirecting... </p>}
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;
