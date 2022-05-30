import { Container} from "components"
import {
    Navbar, 
    NearbyEvents, 
    BlogTable,
} from "components"

function Blog() {
    return (
        <Container>
            <Navbar currPage="homePage"/>
            blog page
            <BlogTable />
        </Container>
    );
}

export default Blog;