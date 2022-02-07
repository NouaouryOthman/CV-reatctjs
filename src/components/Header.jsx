import MenuNav from './MenuNav';

export default function Header(props) {
    return <header >
        <MenuNav changePage={props.changePage} />
    </header>
}