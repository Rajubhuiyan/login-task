
import React from 'react';
import { useState } from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Login.css'
const Login = () => {

    const [clicked, setIsClicked] = useState(false);
    const [value, setValue] = useState(0);
    const handleSubmit = (e) => {

        e.preventDefault();
        setIsClicked(!clicked);

        for (let i = 0; i <= 100; i++) {
            setValue(i);
        }

    }

    return (
        <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center login-container">
            <div className="login-main px-3 pt-3">
                <div className="text-center">
                    <img className="img-fluid pt-4 px-4" src={logo} alt="" />
                    <p style={{ color: '#757575' }}>Hyni ne ilogarine  tuaz</p>
                </div>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Emri i perdoruesit</Form.Label>
                            <Form.Control type="email" />
                            <Form.Text className="text-danger">
                                kerkohet perdoruesit
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>Fjalekalimi</Form.Label>
                            <Form.Control type="password" />
                            <Form.Text className="text-danger">
                                kerkohet perdoruesit
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Me mbaj mend" />
                        </Form.Group>
                        <Button style={{ width: '100%', backgroundColor: '#E0E0E0', border: 'none', color: '#c1bcbc' }} type="submit">
                            HYRJE
                        </Button>

                    </Form>
                    <div className="text-center pb-2">
                        <Button className="mt-3 mb-2 nuk-btn" style={{ width: '100%', backgroundColor: 'white', border: 'none', color: 'black' }} type="submit">
                            NUK KUJTOJ FJALEKALIMIN
                        </Button>
                        {
                            clicked && <ProgressBar  className="mb-2" variant="danger" now={value} />
                        }
                        <small>version 3.0.4</small>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;