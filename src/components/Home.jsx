import Menu from './Menu.jsx'
import Feed from './Feed.jsx'
import Happening from './Happening.jsx'

export default function Home() {
    return (
        <div className="flex flex-row">
            <Menu />
            <Feed />
            <Happening />
        </div>
    )
}