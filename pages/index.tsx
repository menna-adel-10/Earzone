import type { NextPage } from 'next'
import { Container, Box } from '@mui/material';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import CategoryCardContainer from '../components/CategoryCardContainer';


const Home: NextPage = () => {
  return (
    <div>
    <div style={{
      backgroundImage: "url(./assets/home/desktop/image-hero.jpg)",
      height: "100vh",
      backgroundSize: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "white",
    }}>
      <Container>
         <Nav />
        <hr></hr>
        <Hero />
     </Container>
    </div>
      <CategoryCardContainer />
      </div>
  )
}

export default Home
