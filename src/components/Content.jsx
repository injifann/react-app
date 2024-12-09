function Content()
{

  const handleClick1=()=>
  {
    console.log("You clicked it");
  }

  const handleClick2=(name)=>
  {
    console.log(`${name} was clicked`);
  }
  const handleClick3=(e)=>
  {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
  }
  return (
<main>
  <p>
    click event
  </p>
  <button onClick={()=>handleClick1()}>

click me
  </button>

  <button onClick={()=>handleClick2("kabe")}>

  one more
  </button>

  <button onClick={(e)=>handleClick3(e)}>

  click me again
  </button>

</main>
  )
}
export default Content;