import Book from "./components/Book";
import Pen from "./components/Pen";
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._SY385_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/61ledg2cLaL._SY466_.jpg",
  bname: "The road to react",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const p1 = {
  picUrl: "https://m.media-amazon.com/images/I/618WT3o106L._SX522_.jpg",
  company: "Parker",
  price: "230",
};

const p2 = {
  picUrl: "https://m.media-amazon.com/images/I/618WT3o106L._SX522_.jpg",
  company: "Roller",
  price: "499",
};

export default function App() {
  return (
    <>
      <h1>Online Book Store</h1>
      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
        <Pen pen={p1} />
        <Pen pen={p2} />
      </div>
    </>
  );
}
