import {Routes, Route} from 'react-router-dom';
import { Blog, Home, SingleBlog } from '../Page/Page';

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<SingleBlog />} />
    </Routes>
    </>
  )
}

export default Routing