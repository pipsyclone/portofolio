import Script from "../assets/script";

const Project = () => {

    const {
        slice, maxItemProject, handleLoadMore
    } = Script()

    return (
        <>
            <div className="project-wrapper">
                {
                    slice.map((data, key) => {
                        return (
                            <a href={data.linkWebsite} target="_blank" className="project-card">
                                <div className="project-icon">
                                    <div>
                                        <i className="fa-regular fa-folder project-icon-folder"></i>
                                    </div>
                                    <div className="ms-auto project-icon-others">
                                        {
                                            data.github ? 
                                                <a href={data.linkGithub} target="_blank" className="project-icon-github me-3">
                                                    <i className="fa-brands fa-github"></i>
                                                </a>
                                            :
                                                ""
                                        }
                                        <a href={data.linkWebsite} target="_blank" className="project-icon-link">
                                            <i className="fa-solid fa-link"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="project-title">
                                    {data.name}
                                </div>

                                {data.desc}

                                <div className="project-technologies">
                                    {
                                        data.tech.map((technologies, key) => {
                                            return (
                                                <> {technologies.name} </>
                                            )
                                        })
                                    }
                                </div>
                            </a>
                        )
                    })
                }
            </div>

            <div className={maxItemProject ? "d-none" : "mt-5 text-center"}>
                <button className="btnporto mx-auto" onClick={handleLoadMore}>Load More</button>
            </div>
        </>
    )
}

export default Project;