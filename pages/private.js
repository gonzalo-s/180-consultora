import Link from 'next/link'


function Private() {
    
    return <div>
        <h2>Private</h2>

        <Link href="/public">
          <button>Logout</button>
        </Link> 
        
    </div>
}

export default Private