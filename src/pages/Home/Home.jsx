import './home.scss'

const Home = () => {
   return (
      <section className="home">
         <div className="home__info">
            <h5 className="home__heading--h5">So, you want to travel to</h5>
            <h1 className="home__heading--h1">Space</h1>
            <p className="home__text">
               Let’s face it; if you want to go to space, you might as well genuinely go to outer
               space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
               give you a truly out of this world experience!
            </p>
         </div>
         <button>Explore</button>
      </section>
   )
}

export default Home
