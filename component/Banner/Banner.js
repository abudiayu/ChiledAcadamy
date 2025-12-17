import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { requests } from "../../utils/request";
import { Button, Container } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const results = request.data?.results || [];
            setMovie(results[Math.floor(Math.random() * results.length)]);
        }
        fetchData();
    }, []);

    const truncate = (str, n) =>
        str?.length > n ? str.substr(0, n - 1) + "..." : str;

    return (
        <header
            className="banner d-flex align-items-center"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
            }}
        >
            <Container>
                <h1 className="display-4 fw-bold">
                    {movie?.title || movie?.name}
                </h1>

                <div className="my-3">
                    <Button variant="light" className="me-2">Play</Button>
                    <Button variant="secondary">My List</Button>
                </div>

                <p className="col-md-6">
                    {truncate(movie?.overview, 150)}
                </p>
            </Container>

            <div className="banner_fadeBottom" />
        </header>
    );
};

export default Banner;
