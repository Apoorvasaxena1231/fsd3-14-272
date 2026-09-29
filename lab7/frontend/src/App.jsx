const b1={
  picUrl:"https://m.media-amazon.com/images/I/518+W2zr3BL._SY385_.jpg",
  bname:"React Design Pattern",
  Price:1199,
  quantity:10,
  rating:5.0,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/61ledg2cLaL._SY466_.jpg",
  bname: "The road to react",
  Price: 1199,
  quantity: 10,
  rating: 5.0,
};

function Book(props){
  console.log(props);
  
  return(
    <div>
      <img 
      src={props.book.picUrl}
      alt={props.book.bname}
      />
      <h1>{props.book.bname}</h1>
      <h2>Price:{props.book.Price}</h2>
      <h3>Quantity:{props.book.quantity}</h3>
      <h4>Rating:{props.book.rating}</h4>
    </div>
  );
}



export default function App(){
   return (
     <>
       <Book book={b1} />
       <h1>Hello React</h1>
       <Book book={b2} />
       <Book book={b1} />
       <Book book={b2} />
     </>
   );
}