import { useState } from "react";
import Browse from "./Browse";
import Completed from "./Completed";
import Lessons from "./Lessons";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("browse");
    

    const onTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    const renderActiveTab = () => {
        switch (activeTab) {
            case "lessions": {
                return (
                    <Lessons />
                )
            }
            case "completed": {
                return (
                    <Completed />
                )
            }
            default: {
                return (
                    <Browse />
                )
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>Skill</h1>
                </div>
                <div className="col-md-8">
                    <input />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <ul>
                        <li onClick={() => onTabClick("browse")}>
                           Browse
                        </li>
                        <li onClick={() => onTabClick("lessions")}>
                           Lessons
                        </li>
                        <li onClick={() => onTabClick("completed")}>
                            Completed
                        </li>
                    </ul>
                </div>
                <div className="col-md-8">
                    {renderActiveTab()}
                </div>
            </div>
        </div>
    )
}

export default Skills;