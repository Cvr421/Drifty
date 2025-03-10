import Header from "./Header"
import MainSection from "./MainSection"
import Contribute from "./Contribute";
import Demo from "./Demo"
import Footer from "./Footer";

export default async function Home() {
    const data = await getData()
    return (
        <>
            <Header props={"bg-top"}/>
            <MainSection/>
            <Contribute props={data}/>
            <Demo/>
            <Footer/>
        </>
    )
}

export async function getData(){
  const res = await fetch('https://api.github.com/repos/SaptarshiSarkar12/Drifty/contributors?per_page=100&page=1', {method:'GET'}, {next:{revalidate:3600}})
  const contrib = await res.json();
  return {
    contrib,
    revalidate:3600
  }
}