import { Row, Col, Form, Button, Stack, Alert } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginInfo, updateLoginInfo, loginUser, loginError, loginLoading } =
    useContext(AuthContext);

  return (
    <div className="flex-grow-1">
      <Form onSubmit={loginUser}>
        <Row
          style={{
            flexGrow: 1,
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <Form.Label>
                <h3 className="text-white">Login</h3>
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  updateLoginInfo({
                    ...loginInfo,
                    password: e.target.value,
                  })
                }
              />
              <Button variant="primary" type="submit">
                {loginLoading ? "Logging in" : "Login"}
              </Button>
              {loginError && (
                <Alert variant="danger">
                  {loginError?.message ?? "An error occurred!"}
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
