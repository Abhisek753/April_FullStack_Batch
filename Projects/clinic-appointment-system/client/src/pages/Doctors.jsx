import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Badge, Card, CardBody, Col, Container, Row, Spinner,Button } from 'reactstrap'
import { getDoctors } from '../services/doctorService';

const Doctors = () => {
  const [doctors, setDoctors] =useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    const load=async()=>{
      setLoading(true);
      try{
        const data = await getDoctors("/api/doctors");
        console.log(data);
        setDoctors(data.doctors);
      }catch(error){
        console.error("Error fetching doctors:", error);
      }finally{
        setLoading(false);
      }
    };
    load();
  },[])


  return (
  <Container className="py-4">
    <h1 className=" mb-2">Find a Doctor</h1>
    <p>Choose a doctor and book an appointment at a time that works for you.</p>
    {loading ? ( <><Spinner color="primary" /> Loading doctors...</>):(
      <Row className="gy-4">
        {doctors?.map((doc,index)=>(
          <Col key={index} md={4}>
             <Card>
              <CardBody>
                <Badge color="light" className="text-dark mb-2">{doc.specialization}</Badge>
                <h3>{doc?.user.name}</h3>
                <p><strong>{doc.consultationFee}</strong></p>
                <Button color="primary" tag={Link} to={`/doctors/${doc?._id}`}>
                  View & Book
                </Button>
              </CardBody>
             </Card>
          </Col>
        ))}
      </Row>
    )
   }
  </Container>
  )
}

export default Doctors