import SelectItem from "./SelectItem.jsx"

const options = [
  {
    id: 1,
    title: "Select theme:",
    button1: "Easy",
    button2: "Moderate",
    button3: "Difficult",
  },
  {
    id: 2,
    title: "Select number of squares:",
    button1: "5x5",
    button2: "10x10",
    button3: "15x15",
  },
  { id: 3, title: "Select time:", button1: "1min", button2: "3min", button3: "7min" },
];

export default function GameSetup() {

const menuSelection = options.map(el=><SelectItem key={el.id} title={el.title} button1={el.button1} button2={el.button2} button3={el.button3}/>)

  return (
    <>
    {menuSelection}
    <button></button>
    </>

  )
}
