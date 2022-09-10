import './widget.scss';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function Widget({type}) {
    let data;

    // Temporary
    const amount = 100
    const diff = 20


    switch(type){
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className="icon" style={{
                    'color': 'rgb(255 75 75)',
                    'backgroundColor': 'rgb(255 200 200)'
                }}/>
            };
            break;
        case "order":
            data={
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: <ShoppingCartOutlinedIcon className="icon" style={{
                    'color': '#d19a1e',
                    'backgroundColor': '#fdedca'
                }}/>
            };
            break;
        case "earning":
            data={
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className="icon" style={{
                    'color': '#00a14f',
                    'backgroundColor': '#c4ffe9'
                }}/>
            };
            break;
        case "balance":
            data={
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{
                    'color': '#4600ef',
                    'backgroundColor': '#d7c8fd'
                }}/>
            };
            break;
        default:
            break;
    }

    return (
    <div className='widget'>
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.isMoney && "$"} {amount}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ExpandLessOutlinedIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget