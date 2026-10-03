import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { TbPrompt } from "react-icons/tb";

function Navigation() {
  return (
    <Navbar className="py-3">
      <Container>

        <div className="logo">
          <TbPrompt />
          <div>
            <h4 className="logo-title">PromptVault</h4>
            <small className="logo-subtitle">
              Curated AI Prompts
            </small>
          </div>
        </div>

      </Container>
    </Navbar>
  );
}

export default Navigation;