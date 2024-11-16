import FindUsOn from "../Components/FindUsOn";
import LogInWith from "../Components/LogInWith";


const RightAside = () => {
    return (
        <div className="sticky top-3">
            <div>
                <LogInWith></LogInWith>
            </div>
            <div className="mt-4">
                <FindUsOn></FindUsOn>
            </div>
        </div>
    )
};

export default RightAside;