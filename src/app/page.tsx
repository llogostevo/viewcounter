import Image from 'next/image'
import styles from './page.module.css'

// create an async function
export default async function Home() {
  // make a constant to fetch the result from the api
  // first argument is the api to fetch from, the second argument is an option. 
  // next object revalidate 5 will revalidate the fetch call every 5 seconds
  // nb. this is not making a call every 5 seconds, if it has been more than 5 seconds since its last attempt at revalidating the data, then revalidate
  const res = await fetch("https://api.github.com/repos/llogostevo/viewcounter", {next:{revalidate: 5}})
  
  // get the data and store into a joson response
  const data = await res.json()
  console.log(data.stargazers_count)
  return (
    <main >
     <p>{data.stargazers_count}</p>
    </main>
  )
}
