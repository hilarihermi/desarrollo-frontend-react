
import Logo from './_components/Logo';
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';
import Contador from './_components/Contador';

const Default = () => {
    return (
        <div>
            <header className="App-header">
            <Contador />
                <Logo />
                <Description />
                <OpenLink
                    title="Learn Rect"
                    url="https://reactjs.org"
                />
                <OpenLink
                    title=" Mi Proyecto Rect(GitHub)"
                    url="https://github.com/hilarihermi/desarrollo-frontend-react"
                />

            </header>
        </div>
    );
};

export default Default;