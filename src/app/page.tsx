import Image from 'next/image'
import styles from './page.module.css'
import {kv} from "@vercel/kv"

// create an async function
export default async function Home() {

  // ## Favourites on Github ##
  // make a constant to fetch the result from the api
  // first argument is the api to fetch from, the second argument is an option. 
  const res = await fetch("https://api.github.com/repos/llogostevo/viewcounter", {next:{revalidate: 5}})
  
  // get the data and store into a joson response
  const data = await res.json() 
  console.log(data.stargazers_count)
  // ## github ##

// ## HOW MANY TIMES PAGE HAS BEEN LIKED ## 
const pageViews = await kv.incr("views")
 
  return (
    <main >
     <p>{pageViews}</p>
     <span>⭐{data.stargazers_count}</span>
    </main>
  )
}

