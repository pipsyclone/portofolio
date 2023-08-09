const Hero = () => {
    return (
        <>
            <div className="fadeInUp delay-900ms">
                <span className="mynameis">Hai, nama saya adalah</span>
            </div>
            <div className="namewrapper fadeInUp delay-800ms">
                <span className="name">Apip Rahman Syahidan</span>
                <br />
                <span className="createeverything">Saya membuat apapun tentang website.</span>
            </div>
            <div className="fadeInUp delay-700ms">
                <div className="littleparagraf">
                    Saya dapat membuat apapun tentang website
                    dengan ilmu dan pengalaman belajar yang saya miliki ini adalah suatu yang sangat membanggakan.
                    saya dapat membuat dan merancang website yang akan saya buat.
                </div>
            </div>

            <span className="fadeInUp delay-600ms">
                <button onClick={() => window.location.href = "#about"} className="btnporto mt-5">Lihat Selengkapnya</button>
            </span>
        </>
    )
}
export default Hero;