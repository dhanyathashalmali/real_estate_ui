import './homePage.scss'
import Searchbar from "../../components/searchBar/Searchbar.jsx"

function HomePage() {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get
                        Your Dream Place
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam explicabo
                        impedit quisquam nesciunt quasi amet vero
                        perferendis porro aliquid magnam dolor
                        provident distinctio, quidem maiores.
                        Ea sint officia labore.
                    </p>
                    <Searchbar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>

            </div>
            <div className="imgContainer">
                <img src='/bg.png' alt='background image' />
            </div>
        </div>
    )
}

export default HomePage