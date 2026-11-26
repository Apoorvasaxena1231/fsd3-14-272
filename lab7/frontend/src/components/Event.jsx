const MyButton = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <button className="bg-black text-white rounded-md m-4 px-4 py-2">Submit</button>
     
  );
};

const Event = () => {
  return (
    <div>
      <MyButton />
    </div>
  );
};

export default Event;
