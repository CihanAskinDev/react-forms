export default function Footer(){

    const year = new Date().getFullYear()

    return(
        <footer>
        <p>&copy; {year} <a href="https://github.com/CihanAskinDev">github</a></p>
        </footer>
    )
}