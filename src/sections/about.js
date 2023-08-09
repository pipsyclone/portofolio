import biodata from './../data/biodata';

const About = () => {
    return (
        <>
            <div className="about-wrapper">
                <div className="about-text">
                    {biodata.about}
                    <br />
                    <br />
                    <span>Beberapa kemampuan yang telah saya dapatkan : </span>
                    <br />
                    {
                        biodata.skills.map((data, key) => {
                            return (
                                <> <span className='about-skills'>{data.name}</span> </>
                            )
                        })
                    }
                </div>
                <div className='about-foto'></div>
            </div>
        </>
    )
}

export default About;