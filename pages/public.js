import Link from 'next/link'


function Public() {
    
    return <div>
        <h2>Public</h2>
        <Link href="/private">
          <button>Login</button>
        </Link>
    </div>
}

export default Public