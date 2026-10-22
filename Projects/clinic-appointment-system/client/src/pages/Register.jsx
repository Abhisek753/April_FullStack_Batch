

import React, { useState } from 'react'
import { Button, Card, CardBody, CardTitle, Col, Container, FormGroup, Label, Row,Form, Input } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try{
           const data=await fetch('http://localhost:5000/api/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
           });
           const result = await data.json();
           console.log(result);
           if (result.token) {
               localStorage.setItem('token', result.token);
               navigate('/');
           }
           setLoading(false);

        }catch(err){
            setError(err.message);
            setLoading(false);
        }

    }
  return (
    <Container className="py-5 mt-5 bg-gray-400">
        <Row className="justify-content-center">
           <Col md='6' lg='5'>
           <Card >
            <CardBody>
                <CardTitle tag='h2' className='mb-4'>Create account</CardTitle>
                <p className='text-muted'>Patient registration only.</p>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="registerName">Full name</Label>
                        <Input onChange={(e)=>setName(e.target.value)} type="text" value={name} className='form-control' name='name' id='registerName' placeholder='Enter your full name'/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerEmail">Email</Label>
                        <Input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} className='form-control' name='email' id='registerEmail' placeholder='Enter your email'/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerPassword">Password</Label>
                        <Input required onChange={(e)=>setPassword(e.target.value)} type="password" value={password} className='form-control' name='password' id='registerPassword' placeholder='Enter your password'/>
                    </FormGroup>
                    <Button type='submit' color='primary' className='w-100' disabled={loading}>   
                        {loading ? 'Registering...' : 'Register'}
                    </Button>
                </Form>
                <p className='text-center mt-3 mb-0 text-muted'>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </CardBody>
           </Card>
             
           </Col>
        </Row>

      </Container>
  )
}

export default Register