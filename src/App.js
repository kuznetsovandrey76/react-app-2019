// import React from 'react';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';

// // import Main from './Desktop/Main/Main';

// import {Navbar} from './components/Navbar/Navbar';
import {Home} from './pages/Home';
import About from './pages/About';
// import {Questions} from './pages/Questions';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div classNmae='container pt-2'>
//         <Switch>
//           <Route path={'/'} exact component={Home}/>
//           <Route path={'/about'} component={About}/>
//           <Route path={'/questions'} component={Questions}/>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App;

import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";


const Navbar = () => (
  <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
      <div className='navbar-brand'>
          Note App
      </div>   

      <ul className='navbar-nav'>
          <li className='nav-item'>
              <NavLink className='nav-link' to={'/'} exact>
                  Main
              </NavLink>
          </li>    
          <li className='nav-item'>
              <NavLink className='nav-link' to={'/about'}>
                  About
              </NavLink>
          </li>
      </ul>   
  </nav>
)


const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact>
            <About text='About' />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
