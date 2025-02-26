import { useEffect, useState } from 'react'
import './App.css'
import { isOffensiveQuote } from '../public/offensive-quote-ids';

const INITIAL_QUOTE = {quote: 'quote' , character: 'character'}

function App() {

  const [fetchedQuote, setFetchedQuote] = useState(INITIAL_QUOTE);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
     const  fetchQuote = async () => {
      setIsFetching(true);
      const response = await fetch('https://officeapi.akashrajpurohit.com/quote/random');
      const resData = await response.json();
      if(!isOffensiveQuote(resData.id)){
        setFetchedQuote(resData);
        setIsFetching(false);
      } else {
        fetchQuote();
      }
     
    }
    fetchQuote();
  },[])

  const handleNewQuote = async () => {
    setIsFetching(true);
    const response = await fetch('https://officeapi.akashrajpurohit.com/quote/random');
    const resData = await response.json();
    if(!isOffensiveQuote(resData.id)){
      setFetchedQuote(resData);
      setIsFetching(false);
    } else {
      handleNewQuote();
    }
  };

  return (
    <>  
      {isFetching && <p>Loading...</p>}
      {!isFetching && ( <>
        <div id='quote'>
          <img id='character-avatar' alt={fetchedQuote.character} src={fetchedQuote.character_avatar_url} />
          <h2>{fetchedQuote.character}</h2>
          <p>{fetchedQuote.quote}</p>
        </div>
        <button onClick={handleNewQuote} >New Quote</button>
      </>)}
    </>
  )
}

export default App
