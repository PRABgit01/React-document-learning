export function ImageRender() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

export function Gallery() {
  return (
    <section>
      <h1>places</h1>
      <ImageRender />
      <ImageRender />
      <ImageRender />
    </section>
  );
}
