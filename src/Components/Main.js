

function Main(props) {
    return (  
        <main className={props.darkMode ? "dark": ""}>
<h1 className='Main-title'>Fun Facts about React</h1>
<ul className='Main-facts'>
    <li>Was First released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100k stars from Github</li>
    <li>His maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
</ul>
        </main>
    );
}

export default Main;