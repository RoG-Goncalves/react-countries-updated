import { allCountries } from "../data/countries";
import TextInput from "../components/TextInput";
import Header from "../components/Header";
import Main from "../components/Main";
import { useState } from "react";
import Countries from "../components/Countries";

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState("");
  const [visitedCountries, setVisitedCountries] = useState([]);

  //-------------------------------------------------------------------
  const handleCountryFilter = (event) => {
    const newCountryFilter = event.target.value;
    setCountryFilter(newCountryFilter);
  };
  //-------------------------------------------------------------------
  const toggleVisitedCountry = (countryId) => {
    let newVisitedCountries = [...visitedCountries];

    if (!newVisitedCountries.includes(countryId)) {
      newVisitedCountries.push(countryId);
    } else {
      newVisitedCountries = newVisitedCountries.filter((visitedCountryId) => {
        return visitedCountryId !== countryId;
      });
    }

    setVisitedCountries(newVisitedCountries);
  };
  //-------------------------------------------------------------------

  const filteredCountryLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    filteredCountryLowerCase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(filteredCountryLowerCase);
        })
      : allCountries;

  return (
    <div>
      <Header> React Countries</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Informe o nome do país (pelo menos 3 caracteres)"
          inputValue={countryFilter}
          onInputChange={handleCountryFilter}
          autoFocus
          readOnly
        />
        <Countries
          onSelectCountry={toggleVisitedCountry}
          visitedCountries={visitedCountries}
        >
          {filteredCountries}
        </Countries>
      </Main>
    </div>
  );
}
