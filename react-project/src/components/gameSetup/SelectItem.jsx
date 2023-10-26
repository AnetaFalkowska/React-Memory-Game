export default function SelectItem({title, button1, button2, button3}) {
  return (
    <>
      <h2>{title}</h2>
      <menu>
        <button>{button1}</button>
        <button>{button2}</button>
        <button>{button3}</button>
      </menu>
    </>
  );
}
