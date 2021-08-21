import Item from "./Item";

export default function Country({
  children: country,
  onSelectCountry = null,
  isVisited = false,
}) {
  const { flag, name, capital, population, area, id } = country;
  const demographicDensity = population / area;

  if (!country) {
    return <div>Impossível renderizar um país</div>;
  }
  const handleCountryClick = () => {
    if (onSelectCountry) {
      onSelectCountry(id);
    }
  };
  const isVisitedClassName = isVisited ? "bg-green-400" : "";
  return (
    <div
      className={`flex flex-row m-4 border p-2 shadow-lg cursor-pointer ${isVisitedClassName}`}
      onClick={handleCountryClick}
    >
      <img src={flag} alt={name} className="w-1/3 shadow-md mr-1" />
      <ul>
        <li>
          <Item label="Nome">{name}</Item>
        </li>
        <li>
          <Item label="Capital">{capital}</Item>
        </li>
        <li>
          <Item label="População">{population.toLocaleString("pt-BR")}</Item>
        </li>
        <li>
          <Item label="Densidade Demográfica">
            {Math.round(demographicDensity)} Pessoas/km²
          </Item>
        </li>
      </ul>
    </div>
  );
}
