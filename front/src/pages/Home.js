import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from "axios"
import SubForm from '../components/SubForm'

function Home() {

    const [subscribers, setSubscribers] = useState([])

    const FetchSubscriber = async () => {
        let { data } = await axios.get('http://localhost:5050/api/subscribers')

        setSubscribers([...data])
    }
    useEffect(() => {
        FetchSubscriber()
    }
        // , []
    )

    return (
        <Container fluid>
            <Row>
                <Col xs={12} className="">

                    <SubForm />
                </Col>
                <Col xs={12} className="bg-primary d-flex flex-column rounded-top ">
                    <h3 className="my-3 font-weight-bolder text-capitalize text-light">subscribers</h3>
                    {subscribers &&
                        subscribers.map(({ email }, index) => (
                            <div key={index} className="bg-light my-3 ">
                                <h3 className="font-weight-bold mx-3">{email}</h3>
                            </div>
                        ))
                    }


                </Col>

            </Row>
        </Container>
    )
}

export default Home
