export default function MainHeader() {
    return(
        <div className="flex flex-row justify-between p-3 w-full">
            <div>
                <p>Logo</p>
            </div>
            <div className="flex flex-row gap-4 place-items-center">
                <a className="hover:border-b-4 border-b-0 border-transparent hover:border-black transition-all" href="">About</a>
                <a className="hover:border-b-4 border-b-0 border-transparent hover:border-black transition-all" href="">Experience</a>
                <a className="hover:border-b-4 border-b-0 border-transparent hover:border-black transition-all" href="">Projects</a>
                <a className="hover:border-b-4 border-b-0 border-transparent hover:border-black transition-all" href="">Contact</a>
                <input type='button' value='Resume' className="px-4 py-1.5 outline outline-2 outline-black rounded-lg"></input>
            </div>
        </div>
    )
}