import Solutions from "../Solutions/Solutions";
import Opencourses from "../OpenCourses/Opencourses";
import Opportunities from "../Opportunities/Opportunities";
import Lastnews from "../LastNews/Lastnews";
import Start from "../Start/Start";
import Advantages from "../Advantages/Advantages";
import Reviews from "../Reviews/Reviews";
import Header from "../Header/Header";
import Headers from "../Header/Headers";


const Mainpage = () => {
    return (
        <div>

            <Headers/>
            <Solutions/>
            <Opencourses/>
            <Start/>
            <Opportunities/>
            <Advantages/>
            <Reviews/>
        </div>
    );
}

export default Mainpage;
