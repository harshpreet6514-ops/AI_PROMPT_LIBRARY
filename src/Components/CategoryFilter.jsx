import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "Frontend",
    "Python",
    "AI",
    "Marketing",
    "Content",
  ];

  return (
    <Container>
      <div className="category-wrapper">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            variant={
              selectedCategory === category
                ? "dark"
                : "light"
            }
          >
            {category}
          </Button>
        ))}
      </div>
    </Container>
  );
}

export default CategoryFilter;