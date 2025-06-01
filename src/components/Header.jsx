import reactLogo from "./../assets/chef-hat.svg" 

export default function Header() {
    return (
        <header>
            <img src={reactLogo} alt="" aria-hidden="true" />
            <h1>Chef Dan</h1>
        </header>
    )
}