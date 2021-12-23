import { FaWallet} from 'react-icons/fa'
import { RiHomeLine, RiFileCodeLine } from 'react-icons/ri'
import { AiOutlinePieChart } from 'react-icons/ai'



export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <RiHomeLine />,
        className: 'nav-item'
    },

    {
        title: 'Projects',
        path: '/',
        icon: <RiFileCodeLine />,
        className: 'nav-item'
    },

    {
        title: 'Invoices',
        path: '/',
        icon: <FaWallet />,
        className: 'nav-item'
    },

    {
        title: 'Reports',
        path: '/',
        icon: <AiOutlinePieChart />,
        className: 'nav-item'
    }
]