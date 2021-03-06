import { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthApi from "../../context/AuthApi";
import FormGroup from "../../components/FormGroup/FormGroup";
import PrimaryButton from "../../components/Button/PrimaryButton/PrimaryButton";
import { useLocation } from "react-router-dom";
import admin from "../../services/admin";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import adminLoginForm from "../../schemas/adminLoginForm";
import Spinner from "react-bootstrap/Spinner";
import "./AdminLogin.scss";

const AdminLogin = () => {
  let navigate = useNavigate();
  const { setAuth, setAdmin } = useContext(AuthApi);
  let location = useLocation();

  const [message, setMessage] = useState(null);
  const { handleSubmit: handleSubmit1, control: control1 } = useForm();
  const [adminLoginSchema, setAdminLoginSchema] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);
    }
    const adminSchemaValidation = Object.keys(adminLoginForm.fields).map(
      (key) => adminLoginForm.fields[key]
    );
    setAdminLoginSchema(adminSchemaValidation);
  }, []);

  const handleLogin = (data) => {
    setIsLoading(true);
    admin
      .handleAdminLogin(data)
      .then((res) => res)
      .then((data) => {
        setIsLoading(false);
        setAuth(true);
        setAdmin(data.email);
        navigate("/admin/dashboard");
      })
      .catch((err) => {
        setIsLoading(false);
        setMessage(err.message);
      });
  };

  return (
    <Container className="admin-login">
      <Row className="admin-login__section">
        <Row className="admin-login__section__status">
          <Col className="admin-login__section__status__title">
            CONNEXION ADMIN
          </Col>
          <Row className="admin-login__section__status__helper">
            <Col className="admin-login__section__status__helper__message">
              {message ? message : ""}
            </Col>
          </Row>
        </Row>
        <Row className="admin-login__section__process">
          <Row className="admin-login__section__process__content">
            <Row className={`admin-login__section__process__content__form`}>
              {/* admin login form */}
              <Col
                className={`admin-login__section__process__content__form__login`}
              >
                <Form className="admin-login__section__process__content__form__login__container">
                  <FormGroup schema={adminLoginSchema} control={control1} />
                  <Form.Group className="admin-login__section__process__content__form__login__container__cta">
                    <PrimaryButton
                      variant="blue-paark"
                      size="large"
                      disabled={isLoading ? true : false}
                      text={
                        isLoading ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />{" "}
                            Connexion
                          </>
                        ) : (
                          "Connexion"
                        )
                      }
                      onClick={handleSubmit1(handleLogin)}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default AdminLogin;
