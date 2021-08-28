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
                            <img alt="LGMSoC" src="https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1561481802737-SWUB5BOXVEFAQR4RSJU9/white-shark-carcharodon-carcharias.jpg?format=300w" rel="" />
                        </div>
                        <div className="card-title title-black" >
                            <p>Great White Shark</p>
                        </div>
                    </div>
                </Link>

                <div className="card">
                    <div className="card-image">
                        <img alt="LGMSoC" src="https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550291308234-D9Z7DHF434NKIBU4VDPR/blue-shark-prionace-glauca.jpg?format=300w" rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>Humpback Whale</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img alt="LGMSoC" src="https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550536094957-LFE808KY2N8EOXSJE27B/great-hammerhead-shark-sphyrna-mokarran.jpg?format=300w" rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>Great Hammerhead Shark</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img alt="LGMSoC" src="https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550294844082-EK4HZ4T4VJ2VTLXLYI84/caribbean-reef-shark-carcharhinus-perezii.jpg?format=300w" rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>Caribbean Reef Shark</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img alt="LGMSoC" src="https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550606295259-KAL1GRZV9NRORBFE9KRV/sand-tiger-shark-carcharias-taurus.jpg?format=300w" rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>Tiger Shark</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
