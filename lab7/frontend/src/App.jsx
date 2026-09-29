const b1={
  picUrl:"https://m.media-amazon.com/images/I/518+W2zr3BL._SY385_.jpg",
  bname:"React Design Pattern",
  Price:1199,
  quantity:10,
  rating:5.0,
};

function Book(){
  return(
    <div>
      <img src="https://m.media-amazon.com/images/I/518+W2zr3BL._SY385_.jpg" alt="Design Pattern React Js"/>
      <h1>Let us React</h1>
      <h2>Price:765.00</h2>
      <h3>Quantity:5</h3>
      <h4>Rating:5.0</h4>
    </div>
  );
}



export default function App(){
   return (
    <>
    <Book/>
   <h1>Hello React</h1>
   <Book/>
   </>
   );
}