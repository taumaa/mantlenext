import {ConnectButton} from "@rainbow-me/rainbowkit";

const Header = () => {
    return (
        <header className="justify-between flex flex-row">
            <div>
                <img src="/mantlelogo.png" alt="Mantle Punks" className="h-8" />
            </div>
            <div>
                <ConnectButton />
            </div>
        </header>
    );
}

export default Header;