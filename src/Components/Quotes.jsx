import React, { useEffect, useState } from 'react';
import { randomQuote1 } from '../allApi';

function Quotes() {
    const [quote, setQuote] = useState('');
    const [author,setAuthor]=useState('');
    const fetchQuote = async () => {
        try {
            const data = await randomQuote1();
            const randomQuote = data.quotes;
            const randomIndex = Math.floor(Math.random() * randomQuote.length);
            const result = randomQuote[randomIndex];
         
            setQuote(result.quote);
            setAuthor(result.author)
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const handleQuote = () => {
        fetchQuote();
    };

    return (
        <div style={{marginTop:'200px'}}>
          
           <div className='container text-center my-5 w-50 '  >
              <h5>"{quote}"</h5>
              <p className='text-success'>by {author}</p>
              <button className='btn btn-danger' onClick={handleQuote}>Generate Anoter Quote</button>
           </div>
        </div>
    );
}

export default Quotes;