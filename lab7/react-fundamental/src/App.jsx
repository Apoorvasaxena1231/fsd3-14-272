//function must return single element. So we use div or <> . React says use<> instead div here.But this is used only in react
//<> and </> : fragments can be used to group multiple elements.
// component- any js function returns html diractory.
//component can be called as html tag.
//the tag must be closed.
//component's first character must be capital.


function Hello(args){
  return(
    <>
    <h1>{args.name}</h1>
    <img src={args.imageUrl} alt={args.name} style={{height:"300px",width:"250px"}}/>
    <h2>Rs.{args.price}</h2>
    <h3>Author{args.author}</h3>
    <h4>Rating{args.rating}</h4>
    </>
  )
}


export default function App(){
  const books = 
    [
      {
        name: "Atomic Habits",
        author: "James Clear",
        price: 16.99,
        rating: 4.8,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
      },
      {
        name: "The Psychology of Money",
        author: "Morgan Housel",
        price: 14.99,
        rating: 4.7,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg",
      },
      {
        name: "Deep Work",
        author: "Cal Newport",
        price: 15.5,
        rating: 4.6,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962i/25744928.jpg",
      },
      {
        name: "1984",
        author: "George Orwell",
        price: 9.99,
        rating: 4.7,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
      },
      {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 11.99,
        rating: 4.8,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg",
      },
      {
        name: "The Alchemist",
        author: "Paulo Coelho",
        price: 12.99,
        rating: 4.7,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
      },
      {
        name: "Project Hail Mary",
        author: "Andy Weir",
        price: 18.99,
        rating: 4.9,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
      },
      {
        name: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 13.49,
        rating: 4.8,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
      },
      {
        name: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 19.99,
        rating: 4.7,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg",
      },
      {
        name: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        price: 14.5,
        rating: 4.6,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664458703i/32620332.jpg",
      },
    
  ];
  return (
    <>
      <h1>Hello React</h1>
      <Hello name="Let us C" price="355" author="yashwant kanitkar" />
      <Hello name="A S " price="550" author="ED." />
      <Hello{...books[0]} />
      {
        books.map((item)=><Hello {...item}/>)
      }
    </>
  );
}
