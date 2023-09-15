import Message from './components/Message';
import Link from "next/link";

export default function NotFound() {
    return <Message title='Page Not Found'>
        <>
            <p>Could not find this page</p>
            <Link href="/">Return Home</Link>
        </>
    </Message>;
}