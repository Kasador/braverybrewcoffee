import Link  from 'next/link'

export default function Login() {
    return (
        <main>
            <h1>Login Page</h1>
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/"
                rel="noopener noreferrer"
            >
                Back
            </Link>
        </main>
    )
}