function Listdata() {
  var listItems = people.map((input) => <del><h4>{input}</h4></del>);
  return <>{listItems}</>;
}

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export function Mapuse() {
  return (
    <>
      <Listdata />
    </>
  );
}
