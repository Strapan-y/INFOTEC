import { useNavigate } from "react-router-dom";
import botonizquierda from "../../../assets/img/buttonleft.svg";
import book from "../../../assets/img/book.svg";
import video from "../../../assets/img/camera-video.svg";
import choice from "../../../assets/img/choice-outline.svg";
import hat from "../../../assets/img/degree-hat.svg";
import ruler from "../../../assets/img/ruler-pen.svg";
import speedometer from "../../../assets/img/speedometer.svg";
import vector from "../../../assets/img/Vector.svg";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { OnlineExam } from "./OnlineExam";
import { Tasks } from "./Tasks";
import { StudyMaterial } from "./StudyMaterial";
import { Grades } from "./Grades";
import { LiveSession } from "./LiveSession";
import { Attendance } from "./Attendance";


interface MyComponentProps {
    children: React.ReactNode;
}


export const ModulesContents: React.FC = () => {
    const navigate = useNavigate()
    type ViewType = "dashboard" | "onlineExam" | "tasks" | "studyMaterial" | "grades" | "liveSession" | "attendance";
    const [currentView, setCurrentView] = useState<ViewType>("dashboard");



    const ModuleLayout = (props: MyComponentProps) => {
        return (
            <Layout className="bg-[white] flex flex-col items-center rounded-lg shadow-lg h-full w-full overflow-auto">
                <Header className="bg-[white] flex items-center justify-between gap-[2vw] h-[4vw] w-full p-[1vw] border-b-2 border-solid border-gray-500/10">

                    <img className="h-[3vw] w-[3vw] items-center cursor-pointer" src={botonizquierda} onClick={() => navigate('/Academic_Content')} />
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw]">
                        <img className="h-[3vw] w-[3vw] cursor-pointer" src={speedometer} onClick={() => setCurrentView('dashboard')} />
                        <h1 className="text-[0.8vw] relative bottom-[1vw]">TABLERO</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw]">
                        <img className="h-[2.5vw] w-[3vw] cursor-pointer" src={vector} onClick={() => setCurrentView('onlineExam')} />
                        <h1 className="text-[0.8vw] relative bottom-[0.7vw]">EXAMEN EN LINEA</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw]">
                        <img className="h-[2.5vw] w-[3vw] cursor-pointer" src={ruler} onClick={() => setCurrentView('tasks')} />
                        <h1 className="text-[0.8vw] relative bottom-[0.7vw]">TAREAS</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw]">
                        <img className="h-[2.4vw] w-[3vw] cursor-pointer" src={book} onClick={() => setCurrentView('studyMaterial')} />
                        <h1 className="text-[0.8vw] relative bottom-[0.7vw]">MATERIAL DE ESTUDIO</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw]">
                        <img className="h-[2.4vw] w-[3vw] cursor-pointer" src={hat} onClick={() => setCurrentView('grades')} />
                        <h1 className="text-[0.8vw] relative bottom-[0.7vw]">CALIFICACIONES</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw]">
                        <img className="h-[2.5vw] w-[3vw] cursor-pointer" src={video} onClick={() => setCurrentView('liveSession')} />
                        <h1 className="text-[0.8vw] relative bottom-[0.7vw]">LIVE</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw]">
                        <img className="h-[2.4vw] w-[3vw] cursor-pointer" src={choice} onClick={() => setCurrentView('attendance')} />
                        <h1 className="text-[0.8vw] relative bottom-[0.7vw]">ASISTENCIA</h1>
                    </div>
                </Header>
                <Content className="flex flex-col items-center gap-[1vw] w-full">
                    {props.children}

                </Content>

            </Layout>
        )

    }
    const views = {
        "dashboard": <Dashboard />,
        "onlineExam": <OnlineExam />,
        "tasks": <Tasks />,
        "studyMaterial": <StudyMaterial />,
        "grades": <Grades />,
        "liveSession": <LiveSession />,
        "attendance": <Attendance />,
    }

    return (
        <div className="users flex flex-col h-full w-full p-[1vw] gap-[1vw]" >
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">DASHBOARD</h1>
            </div>
            <ModuleLayout>{views[currentView]}</ModuleLayout>


        </div>
    );
}