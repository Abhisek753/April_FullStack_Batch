import React, { useEffect, useState } from 'react'
import { getDoctor } from '../services/doctorService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Badge, Card, CardBody, Col, Container, Row } from 'reactstrap';

const DoctorDetails = () => {
  const {doctorId} = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState("");
  const [date, setDate] = useState("");
  const [dayLabel, setDayLabel] = useState("");
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [bookingTime, setBookingTime] = useState("");


  useEffect(() => {
   
    const load=async () => {
      try{
        const data=await getDoctor(`/api/doctors/${doctorId}`);
        console.log(data?.doctor[0])
        setDoctor(data?.doctor[0]);
      }catch(error){
        console.error("Error fetching doctor details:", error);
        setError("Failed to load doctor details. Please try again later.");
      }
    }
    load();
   
  }, [doctorId]);

  return (
    <Container className="py-4">
      <p className="text-muted mb-2">
        <Link to="/doctors">Back to Doctors</Link>
      </p>
      <Row>
        <Col lg="4" className="mb-4">
         <Card className="h-100 doctor-profile-card">
           <CardBody>
            <Badge color="success" className="mb-2">
              Available 
            </Badge>
            <h2 className='mb-1'>{doctor?.user?.name}</h2>
            <p className="mb-2">{doctor?.specialization}</p>
            <p className="mb-2"><strong>Fee:</strong> ${doctor?.consultationFee}</p>
            <p className="mb-0 small text-muted"><strong>Bio:</strong> {doctor?.bio}</p>
           </CardBody>
         </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default DoctorDetails