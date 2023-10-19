```
Note: This is a short warm up question meant to help you familiarize with the coding workspace. Actual UI coding interview questions will be more complicated.

Requirements

Make the text within the button display the number of times the button has been clicked.
```

import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          Clicks: {count}
        </button>
      </div>
    );
  }
  