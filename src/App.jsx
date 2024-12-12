
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import { useState } from 'react';

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");


  return (
      <div className="app-container">
      
      <Sidebar selectedTab = {selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className="conetnt">
        <Header />
        { selectedTab === 'Home' ?( <PostList></PostList> ):( <CreatePost/>)}
       
        <Footer />
      </div>
      
        </div>
    
    
  )
    
}

export default App
