import useAuth from "../../hooks/useAuth.js";
import { useState } from "react";
import {
  Button,
  Input,
  Title,
  FormWrapper,
  Container,
} from "./Login-styled.js";

const LoginPage = () => {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    //if success navigate to admin dashboard
    // if error navigate to 404 page
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
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;
