import React from 'react'
import WazNav from '../components/WazNav';
import WazFoot from '../components/WazFoot';
import { Container } from 'react-bootstrap';

const Main = () => {
  return (
    <>
        <WazNav />
        <Container className='text-light anon-class mt-5 d-flex align-items-center flex-column gap-3'>
          <h3>Hello</h3>
          <p>Welcome to my page...</p>
          <div>
            <h5>This is some kind of landing page or something, meant to fulfill some type of something or other, in terms of programming and practicing code or something like that, maybe.</h5>
          </div>

        </Container>
        <WazFoot />
    </>
  )
}

export default Main