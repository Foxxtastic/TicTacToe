import { AppBarType } from "../types/types";
import { Link } from 'react-router-dom';

type AppBarProps = {
    appBarItems: AppBarType
}

export function AppBar({ appBarItems }: AppBarProps) {
    return (
        <div className="appbar">
            {appBarItems.map((_, idx) => <span key={idx} className="appbar-item"><Link to={_.link}>{_.text}</Link></span>)}
        </div>
    )
}