import Link from "next/link";

export default function Header() {
    return (
        <div className="grid grid-cols-2 p-8 sticky top-0">
            <div className="">                
                <Link href='/'>Abby Danae</Link>
            </div>
            <div className="flex justify-end">
                <div className="block lg:hidden">
                    hamberger
                </div>
                
                <div className="hidden lg:block">
                    <Link href='/about' className="flex-none px-4">About</Link>
                    <Link href='/collections' className="flex-none px-4">Collections</Link>
                    <Link href='/gallery' className="flex-none px-4">Gallery</Link>
                    <Link href='/contact' className="flex-none px-4">Contact</Link>
                </div>
            </div>
        </div>
    );
}