import { Row, Col, Form } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <Form>
        <Row style={{ height: "100vh", justifyContent: "center" }}>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>
                <h3 className="text-white">Register</h3>
              </Form.Label>

              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
