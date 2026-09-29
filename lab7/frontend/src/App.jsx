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
      <img 
      src={b1.picUrl}
      alt={b1.bname}
      />
      <h1>{b1.bname}</h1>
      <h2>Price:{b1.Price}</h2>
      <h3>Quantity:{b1.quantity}</h3>
      <h4>Rating:{b1.rating}</h4>
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