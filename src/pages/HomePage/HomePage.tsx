import { Container} from "components"
import {
    // Articles,
    // Dana, 
    // Freebook, 
    Navbar, 
    NearbyEvents, 
    // Proker, 
} from "components"

function Home() {
    return (
        <Container>
            <Navbar currPage="homePage"/>
            {/* <Banner /> */}
            <NearbyEvents/>
            {/* <Proker />
            <Freebook />
            <Dana />
            <Articles /> */}
            {/* <Footer /> */}
        </Container>
    );
}

export default Home;