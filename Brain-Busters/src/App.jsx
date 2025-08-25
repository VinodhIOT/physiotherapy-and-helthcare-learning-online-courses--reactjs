import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursesPage from './Pages/Courses/CoursePage'
import Home from './Pages/Home/Home'
import DetailPage from "./Pages/Details/Detail";
import WatchNow from './Pages/Watchnow/WatchNow'




function App() {
  return (
   <Router>
     <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/courses" element= {<CoursesPage/>}/>
        <Route path = "/detail" element= {<DetailPage/>}/>
        <Route path = "/watchnow" element= {<WatchNow/>}/> 
        <Route path="/details/:id" element={<DetailPage />} />   
        <Route path="/courses/:category" element={<CoursesPage />} />
         <Route path="/courses" element={<CoursesPage />} />
   
     </Routes>
   </Router>
  )

}

export default App;
