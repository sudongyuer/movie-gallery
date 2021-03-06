import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import GithubCorner from '../components/GithubCorner'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'
const Home: NextPage = () => {
  const router = useRouter()
  const { genre } = router.query
  const [results, setResults] = useState(null)
  useEffect(() => {
    async function fetchResults() {
      const {results} = await fetch(
        `https://api.themoviedb.org/3${
          requests[genre]?.url || requests.fetchTrending.url
        }`
      ).then((res) => res.json());
      setResults(results)
    }
    fetchResults()

  }, [genre])



  return (
    <div>
      <Head>
        <title>movie gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico.png" />
        
      </Head>
      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav />
      {/* Results */}
      <Results  results={results} />
    </div>
  )
}

export default Home


// export async function getServerSideProps(context) {
//   const genre = context.query.genre;

//   const request = await fetch(
//     `https://api.themoviedb.org/3${
//       requests[genre]?.url || requests.fetchTrending.url
//     }`
//   ).then((res) => res.json());

//   return {
//     props: {
//       results: request.results,
//     },
//   };
// }
