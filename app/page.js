import { Button } from "@/components/ui/button";
export default function Home(){
  return(
    <div>
      <h1 className="text-center text-4xl">Welcome to Next.js</h1>
      <p className="text-center">Get started by editing <code>pages/index.js</code></p>
      <a href="https://nextjs.org/learn/basics/getting-started" className="text-center mt-4">
      <Button variant="outline">Click me</Button>

      </a>
    </div>
  );
}