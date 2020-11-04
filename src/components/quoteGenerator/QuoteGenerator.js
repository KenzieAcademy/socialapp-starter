import React from "react";
import QuoteData from "./Quote.json";
import "../quoteGenerator/QuoteGenerator.css";
//   Quotes from Call of Cthulhu

//   Kuh{bull}thoo{bull}loo

// <Button size="small">Summon Another</Button>

function QuoteGenerator() {
  return (
    <div className="QuoteGenerator">
      <div className="posts">
        <h3>Quotes from Call of Cthulhu</h3>
        <p>Kuh&#8226;thoo&#8226;loo</p>
        {QuoteData.map((post) => {
          return (
            <div key={post.id} className="post">
              <p>{post.quote}</p>
            </div>
          );
        })}
        <button size="small">Summon Another</button>
      </div>
    </div>
  );
}
export default QuoteGenerator;
