
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SlideBar from 'src/Components/Layout/SlideBar'
import List from 'src/Components/Products/List'
import Footer from './Footer'

const Home = () => {
    return (
        <>
        <Header/>
        <SlideBar/>
        <List/>
        <Footer/>
        <Outlet/>
        </>
    )
}

export default Home