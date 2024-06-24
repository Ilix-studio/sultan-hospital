import { useState } from "react";
import { useAuth } from "../../context/AuthProvider.js";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Title,
  FormWrapper,
  Container,
} from "./Login-styled.js";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const queryClient = useQueryClient();
  const { login } = useAuth();
  const navigate = useNavigate();

  // Use useMutation to handle login.
  const mutation = useMutation(
    async (credentials) => {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        credentials
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        login(data.token, data.user);
        queryClient.invalidateQueries("user");
        navigate("/adminDashboard");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(credentials);
  };
  return (
    <Container>
      <FormWrapper>
        <Title>Admin Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
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
