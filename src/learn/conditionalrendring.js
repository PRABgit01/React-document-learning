function Data({ name, isPacked }) {
  return (
    //this is just example of props and condition rendering
    <>
      <li>{isPacked ? <del>{name}</del> : name}</li>
    </>
  );
}

export function DataShow() {
  return (
    <>
      <section
        style={{
          margin: "20px",
        }}
      >
        <h1>scratching for the react</h1>
        <Data name="drama react" isPacked={true} />
        <Data name="don " isPacked={false} />
        <Data name="react ui is best" isPacked={true} />
      </section>
    </>
  );
}
