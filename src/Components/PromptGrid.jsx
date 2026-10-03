import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PromptCard from "./PromptCard";

function PromptGrid({ prompts }) {
    if (prompts.length === 0) {
        return (
            <Container>
                <h4 className="text-center mt-5 text-muted">
                    No prompts found
                </h4>
            </Container>
        );
    }

    return (
        <Container className="pb-5">
            <h2 className="section-title">
                Trending Prompts
            </h2>
            <Row>
                {prompts.map((item) => (
                    <Col
                        key={item.id}
                        lg={4}
                        md={6}
                        sm={12}
                        className="mb-4"
                    >
                        <PromptCard
                            title={item.title}
                            category={item.category}
                            prompt={item.prompt}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PromptGrid;