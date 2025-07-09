function ItemList() {
  const items = ['React', 'JSX', 'Components', 'Hooks', 'Props'];
  return (
    <section>
      <h2>Key React Concepts</h2>
      <ul className="item-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default ItemList;
