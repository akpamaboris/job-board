import "./App.css";
import Job from "./Job";

function App() {
  return (
    <div>
      <header>
        <h1>The Job Board</h1>
      </header>
      <div className="container">
        <Job
          Country="Australie"
          City="Sidney"
          ContractType="CDI"
          Title="Full Time Sales Associate -Sidney Boutique"
          Color="red"
        />
        <Job
          Country="France"
          City="Pantin"
          ContractType="CDI"
          Title="Agent de Sécurité - Pantin"
          Color="green"
        />
        <Job
          Country="France"
          City="Paris"
          ContractType="CDD"
          Title="Responsable d'Atelier(H/F)"
          Color="yellow"
        />
        <Job
          Country="France"
          City="Paris"
          ContractType="CDD"
          Title="Chef de projet"
          Color="blue"
        />
        <Job
          Country="France"
          City="Paris"
          ContractType="CDI"
          Title="Développeur React.js"
          Color="pink"
        />
        <Job
          Country="Suède"
          City="Stockholm"
          ContractType="CDI"
          Title="Sales Associate Stockholm"
          Color="red"
        />
        <Job
          Country="Suisse"
          City="Crans-Montana"
          ContractType="CDI"
          Title="Vendeur/se - Crans Montana"
          Color="green"
        />
        <Job
          Country="USA"
          City="New York"
          ContractType="CDI"
          Title="CRM & Data Quality Analys"
          Color="red"
        />
        <Job
          Country="France"
          City="Pantin"
          ContractType="CDI"
          Title="Infirmier (H/F)"
          Color="blue"
        />
      </div>
    </div>
  );
}

export default App;
