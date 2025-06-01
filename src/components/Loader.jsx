import chefCooking from "./../assets/chef-cooking.svg"

export default function Loader() {
    return (
        <div className="loader">
            <img src={chefCooking} alt="Chef Dan is cooking" />
            <span>Chef Dan is cooking...</span>
        </div>
    )
}