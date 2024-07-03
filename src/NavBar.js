import Example from "./Slide"



export default function Navbar() {
  return (<nav className="nav">
    <a href="/" className="Home">Home</a>
    <ul>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
    </ul>
    <Example />
  </nav>
      
  )
}
