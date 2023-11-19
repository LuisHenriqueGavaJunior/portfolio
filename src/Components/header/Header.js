import './Header.css'
import { Link } from 'react-router-dom'

function Header(){
  return(
   <div className='Header'>
    <div className='HContent'>
     <h1 className='HText'> <Link to="/">Portfolio</Link> </h1>    
      <div className='HButtons'>
       <button className='HButton'><h1> <Link to="/" activeClassName="no-underline">Home</Link> </h1></button>
       <button className='HButton'><h1> <Link to="/" activeClassName="no-underline">Sobre</Link> </h1></button>
       <button className='HButton'><h1> <Link to="/" activeClassName="no-underline">Serviços</Link> </h1></button>
       <button className='HButton'><h1> <Link to="/" activeClassName="no-underline">Portfolio</Link> </h1></button>
       <button className='HButton'><h1> <Link to="/" activeClassName="no-underline">Contato</Link> </h1></button>

      </div>
    </div>
   </div>
  )
}
export default Header