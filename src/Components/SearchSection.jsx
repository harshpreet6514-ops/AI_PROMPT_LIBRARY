import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function SearchSection({ searchTerm, setSearchTerm }) {
  return (
    <section className="hero-section">
      <Container>

        <div className="hero-content">

          <h1>PromptVault</h1>

          <p>
            Discover & save high-quality AI prompts
          </p>

          <Form.Control
            type="text"
            placeholder="Search prompts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

        </div>

      </Container>
    </section>
  );
}

export default SearchSection;