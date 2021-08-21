import Country from "./Country";

export default function Countries({
  children: countries = [],
  onSelectCountry = null,
  visitedCountries = [],
}) {
  return (
    <div>
      <h2 className="text-center m-2 font-semibold">
        {countries.length} País(es) - {visitedCountries.length} Visitados
      </h2>
      {countries.map((country) => {
        const isVisited = visitedCountries.includes(country.id);
        return (
          <Country
            onSelectCountry={onSelectCountry}
            key={country.id}
            isVisited={isVisited}
          >
            {country}
          </Country>
        );
      })}
    </div>
  );
}
