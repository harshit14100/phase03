import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div >
      <header className='bg-zinc-500 text-white p-3'>
        <nav >
          <ul className='flex justify-around text-3xl'>
            <li>
              <NavLink to={"/"}>Hero TanQuery</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/trad"}>FetchOld</NavLink>
            </li>
            <li>
              <NavLink to={"/rq"}>FetchRQ</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
