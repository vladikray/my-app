import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Navbar from "./Navbar";


export default function BasicExample() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container mt-2" style={{ marginTop: 40 }}>
                <Routes>
                    <Route exact path="/" element={<Home />}>
                    </Route>
                    <Route path="/about" element={<About />}>
                    </Route>
                    <Route path="/:id/:nickname" element={<Child />}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
            <h2>About</h2>
            <h2>About</h2>
            <h2>About</h2>
            <h2>About</h2>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function Child() {
    let useParams1 = useParams();
    // var id = useParams1.id;
    // var nickname = useParams1.nickname;
    let { id, nickname } = useParams1;

    return (
        <div>
            <h3>ID: {id}</h3>
            <h4>ID: {nickname}</h4>
        </div>
    );
}