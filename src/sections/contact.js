const Contact = () => {
    return (
        <>
            <div className="contact-wrapper">
                <div className="contact-title">
                    Apa selanjutnya ?
                </div>
                <div className="contact-text">
                    Jika anda butuh bantuan mengenai website, silahkan hubungi saya dengan meng klik tombol dibawa ini.
                    <br />
                    Terima Kasih semoga harimu menyenangkan.
                </div>
                <button onClick={() => window.location.href = "mailto:apiprs24@gmail.com"} className="btnporto mx-auto mt-5">
                    Say Helo To Me
                </button>
            </div>
        </>
    )
}

export default Contact;