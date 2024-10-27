import { Route, Routes} from 'react-router-dom'
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import Navigation from './Navigation/Navigation';


const HomePage = lazy(() => import('../pages/HomePage/HomePage')); 
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const MoviesCast = lazy(() => import('./MovieCast/MovieCast'));
const MoviesReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));


const App = () => {
    return <div>

        <Toaster/>
        
        <Navigation/>

        <Suspense fallback={<div>Loading...</div>}>
        <Routes>

            <Route path='/' element={<HomePage/>}/>
            <Route path='/Movies' element={<MoviesPage/>}/>
            <Route path='/Movies/:movieId' element={<MovieDetailsPage/>}>
                <Route path='cast' element={<MoviesCast/>}/>
                <Route path='reviews' element={<MoviesReviews/>}/>
            </Route>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        </Suspense>
    </div>
};

export default App