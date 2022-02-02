import {
    Link,
    Outlet
} from "react-router-dom";

const Skills = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h1>Skill</h1>
                </div>
                <div class="col-md-8">
                    <input />
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <ul>
                        <li>
                            <Link to="/skills">Brows</Link>
                        </li>
                        <li>
                            <Link to="/skills/lessons">Lessons</Link>
                        </li>
                        <li>
                            <Link to="/skills/completed">Completed</Link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Skills;