import { Link } from 'react-router-dom';
import "./Home.css"

export default function Home() {
    return (
        <div>
            <div>
                <div className="home_heading">Sea animals</div>
            </div>
            <div className="cards-list">

                <Link to="/whiteshark" style={{ textDecoration: "none" }}>
                    <div className="card">
                        <div className="card-image">
                            <img alt="Sea Animal" src="https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1561481802737-SWUB5BOXVEFAQR4RSJU9/white-shark-carcharodon-carcharias.jpg?format=300w" rel="" />
                        </div>
                        <div className="card-title title-black" >
                            <p>Great White Shark</p>
                        </div>
                    </div>
                </Link>

                <Link to="/humpbackWhale" style={{ textDecoration: "none" }}>
                    <div className="card">
                        <div className="card-image">
                            <img style={{paddingTop: "50px"}} alt="Sea Animal" src="https://www.nicepng.com/png/full/185-1859293_humpback-whale-megaptera-novaeangliae-png.png" rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>Humpback Whale</p>
                        </div>
                    </div>
                </Link>

                <Link to="/hammerHead" style={{ textDecoration: "none" }}>
                    <div className="card">
                        <div className="card-image">
                            <img alt="Sea Animal" src="https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550536094957-LFE808KY2N8EOXSJE27B/great-hammerhead-shark-sphyrna-mokarran.jpg?format=300w" rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>Great Hammerhead Shark</p>
                        </div>
                    </div>
                </Link>

                <Link to="/caribbeanReef" style={{ textDecoration: "none" }}>
                    <div className="card">
                        <div className="card-image">
                            <img alt="Sea Animal" src="https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550294844082-EK4HZ4T4VJ2VTLXLYI84/caribbean-reef-shark-carcharhinus-perezii.jpg?format=300w" rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>Caribbean Reef Shark</p>
                        </div>
                    </div>
                </Link>

                <Link to="/tigerShark" style={{ textDecoration: "none" }}>
                    <div className="card">
                        <div className="card-image">
                            <img alt="Sea Animal" src="https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550606295259-KAL1GRZV9NRORBFE9KRV/sand-tiger-shark-carcharias-taurus.jpg?format=300w" rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>Tiger Shark</p>
                        </div>
                    </div>
                </Link>

                <Link to="/turtle" style={{ textDecoration: "none" }}>
                    <div className="card">
                        <div className="card-image">
                            <img alt="Sea Animal" style={{width: "250px"}} src="https://images.squarespace-cdn.com/content/v1/59cae0d6be42d63f64cf6dd2/1542849310301-W1AYZOXF2F553BGQ6O5U/leatherback+art.png?format=1000w" rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>Juvenile Leatherback Sea Turtle</p>
                        </div>
                    </div>
                </Link>

                <Link to="/seal" style={{ textDecoration: "none" }}>
                    <div className="card">
                        <div className="card-image">
                            <img alt="Sea Animal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RmZruBw5Ri2VWlraaWP0sAhALGaph7nKcA&usqp=CAU" rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>Dotted White Seal</p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}
