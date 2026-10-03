import { useState, useEffect } from "react";

import "./App.css";

import Navigation from "./Components/Navbar";
import SearchSection from "./Components/SearchSection";
import CategoryFilter from "./Components/CategoryFilter";
import PromptGrid from "./Components/PromptGrid";
import LoadingScreen from "./Components/LoadingScreen";

import prompts from "./data/prompts";

function App() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch =
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      prompt.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navigation />

      <SearchSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <PromptGrid prompts={filteredPrompts} />
    </>
  );
}

export default App;