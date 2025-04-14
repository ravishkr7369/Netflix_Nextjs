// pages/movie.js or movie.jsx
import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import Loading from "@/components/loading";
import styles from "@/styles/common.module.css";

export default function Movie() {
	const [mainData, setMainData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await new Promise(resolve => setTimeout(resolve, 1000)); // simulate delay

				const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";

				const options = {
					method: 'GET',
					headers: {
						'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
						'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
					},
				};

				const res = await fetch(url, options);
				const data = await res.json();

				const formattedData = data.titles.map((item) => {
					const movie = item.jawSummary;
					return {
						id: movie.id,
						title: movie.title,
						type: movie.type,
						synopsis: movie.synopsis,
						backgroundImage: movie.backgroundImage?.url,
					};
				});

				setMainData(formattedData);
			} catch (error) {
				console.error("Error fetching movies:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <Loading />;

	return (
		<section className={styles.movieSection}>
			<div className={styles.container}>
				<h1>Series & Movie</h1>
				<div className={styles.card_section}>
					{mainData.map((curElem) => (
						<MovieCard key={curElem.id} {...curElem} />
					))}
				</div>
			</div>
		</section>
	);
}
