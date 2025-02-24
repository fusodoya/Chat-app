import { Row, Col, Form, Button, Stack, Alert } from "react-bootstrap";

const Login = () => {
  return (
    <div className="flex-grow-1">
      <Form>
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

              <Form.Control type="email" placeholder="Email" />
              <Form.Control type="password" placeholder="Password" />
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Alert variant="danger">Error</Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
