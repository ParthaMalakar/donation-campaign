
const Home = () => {
    return (
        <div>
            <div className="hero max-w-full mx-auto" style={{

                background: 'rgba(255, 255, 255, 0.7)',

                backgroundImage: 'url("https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1D02pYwOrDFATU7bddAyiLXB3rJ-LgHzc8PvWXYS4DNbOAveXbJnLBblw")',

                backgroundSize: 'cover',

                backgroundPosition: 'center',

                backgroundRepeat: 'no-repeat',

                width: '100%',

                height: '480px',

            }}>
                <div className="hero-overlay  bg-[#FFFFFFF2]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                        <div className="mt-10">
                            <input type="text" className="border-solid border-2 border-[#DEDEDE] bg-[#FFF] py-3 pl-3" name="text" placeholder="Search here...." />
                            <button className="bg-[#FF444A] text-[#FFF] py-3 px-7">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;