import { BlogTable, } from "components";
import { Container, Navbar } from "components";
function Blog() {
    return (
    <Container>
            <Navbar content={<BlogTable />} currentPage={'blog'} />
            
        </Container>
        );
}
export default Blog;
