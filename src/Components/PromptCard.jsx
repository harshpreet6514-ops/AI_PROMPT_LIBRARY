import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PromptCard({ title, category, prompt }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <Card className="prompt-card">
      <Card.Body>
        <span className="prompt-category">
          {category}
        </span>

        <h5 className="prompt-title">
          {title}
        </h5>

        <p className="prompt-text">
          {prompt}
        </p>

        <Button
          variant={copied ? "success" : "dark"}
          onClick={handleCopy}
        >
          {copied ? "Copied" : "Copy Prompt"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PromptCard;