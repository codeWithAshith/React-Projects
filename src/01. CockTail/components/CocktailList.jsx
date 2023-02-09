import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <h2>cocktail list component</h2>
    </section>
  );
};

export default CocktailList;
