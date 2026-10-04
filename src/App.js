
import { useEffect, useState } from 'react';
import ProductCard from './Components/ProductCard';

function App() {
  const [data,setData] = useState([]);
  const [pageNumber,setPageNumber] = useState(0);


  const pageSize = 10;
  const totalProducts = data.length;
  const pages = Math.ceil(totalProducts/pageSize);
  console.log(pages);
  console.log(pageNumber);
  const start = pageNumber*pageSize;


  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setData(json.products);
  };

  const handleClick = (e)=>{
    setPageNumber(Number(e.target.textContent));
  }

  const handleLeftClick = ()=>{
    if(pageNumber>0)setPageNumber(pageNumber-1);
    else setPageNumber(pages-1);
  }

  
  const handleRightClick = ()=>{
    if(pageNumber<pages-1) setPageNumber(pageNumber+1);
    else setPageNumber(0);
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className='flex justify-center items-center'>
      <span onClick={handleLeftClick}>⬅️</span>
      {[...Array(pages).keys()].map((key)=><div key={key} className={`p-2 m-2 border border-black rounded-lg ${pageNumber==key ? 'bg-gray-300':""}`} onClick={handleClick}>{key}</div>) }
      <span onClick={handleRightClick}>➡️</span>
    </div>
    <div>
      {data  && <div className="App flex flex-wrap">
      {data.slice(start,start+pageSize).map((product,index)=><ProductCard key={product?.id} data={product}/>)}
    </div>}
    </div>
    </>
  );
}

export default App;
