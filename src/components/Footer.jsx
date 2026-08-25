function Footer() {
    const anoAtual = new Date().getFullYear()

    return (
        <footer className="footer_section" >
            <div className="container">
                <p>
                    &copy; {anoAtual} by Leonardo Magrelo
                </p>
            </div>
        </footer >
    )
}

export default Footer
