const peoples = [
  {
    id: 0,
    name: "react file",
    profession: "machine",
  },
  {
    id: 2,
    name: "java file",
    profession: "pc",
  },
  {
    id: 3,
    name: "flutter file",
    profession: "machine",
  },
];
//this method can access the value inside the json and can even maluplate the value

var machine = peoples.map((language) => (
  <div>
    <li>id:{language.id}</li>
    <li>Name: {language.name}</li>
    <li>Profession: {language.profession}</li>
    <br/>
  </div>
));



//filter method
var filteredLanguage = peoples.filter(
  (machine) => machine.profession === "machine" && machine.name === "react file"
);

var languageelement = filteredLanguage.map((item) => (
  <div>
    <p>{item.name}</p>
  </div>
));

export function Filtering() {
  return <>{machine}</>;
}
