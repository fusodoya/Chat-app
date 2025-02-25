import { useContext } from "react";
import { Row, Col, Form, Button, Stack, Alert } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    registerLoading,
  } = useContext(AuthContext);

  return (
    <div className="flex-grow-1">
      <Form onSubmit={registerUser}>
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
                <h3 className="text-white">Register</h3>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
              <Button variant="primary" type="submit">
                {registerLoading ? "Creating your account" : "Register"}
              </Button>
              {registerError && (
                <Alert variant="danger">
                  {registerError?.message ?? "An error occurred!"}
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Register;
