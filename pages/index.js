import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to My Next.js Site!</h1>
      
      {/* Updated Link usage */}
      <Link href="/about">Learn more about this project</Link>
      
      {/* Interactive counter */}
      <div style={{ marginTop: "20px" }}>
        <h2>Interactive Counter</h2>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    </div>
  );
}
