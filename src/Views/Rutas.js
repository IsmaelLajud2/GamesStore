import Admin from './Admin'
import Detailgames from './DetailGames/Detailgames';
import ErrorPage from "./ErrorPage";
import Games from './DetailGames/Games';
import Home from './Home/Home';

import Login from './Login';
import Register from "./Register";
import TaskList from './TaskList';

const Routes = [{

    path: '/',
    Element: Home

},
{
    path: '/register',
    Element: Register

},
{
    path: '/admin',
    Element: Admin

},
{
    path: '/error',
    Element: ErrorPage

},
{
    path: '/tasklist',
    Element: TaskList
},
{
    path: '/login',
    Element: Login
},
{
    path: '/productos/:id',
    Element: Detailgames
} ,
{
    path: '/productos',
    Element: Games
} 

]
export default Routes