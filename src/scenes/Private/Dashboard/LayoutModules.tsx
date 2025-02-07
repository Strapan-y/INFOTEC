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
                <Header className="bg-[white] flex items-center justify-between gap-[2vw] h-[5vw] w-full p-[1vw] border-b-2 border-solid border-gray-500/10">

                    <img className="h-[3vw] w-[3vw] items-center cursor-pointer" src={botonizquierda} onClick={() => navigate('/Academic_Content')} />
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw]  cursor-pointer" onClick={() => setCurrentView('dashboard')}>
                        <img className="h-[3vw] w-[3vw]" src={speedometer}  />
                        <h1 className="text-[0.7vw] relative bottom-[1vw] text-[#016FB4]">TABLERO</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw] cursor-pointer" onClick={() => setCurrentView('onlineExam')}>
                        <img className="h-[2.5vw] w-[3vw]" src={vector} />
                        <h1 className="text-[0.7vw] relative bottom-[0.7vw] text-[#016FB4]">EXAMEN EN LINEA</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw] cursor-pointer" onClick={() => setCurrentView('tasks')}>
                        <img className="h-[2.5vw] w-[3vw]" src={ruler} />
                        <h1 className="text-[0.7vw] relative bottom-[0.7vw] text-[#016FB4]">TAREAS</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw] cursor-pointer" onClick={() => setCurrentView('studyMaterial')}>
                        <img className="h-[2.4vw] w-[3vw]" src={book} />
                        <h1 className="text-[0.7vw] relative bottom-[0.7vw] text-[#016FB4]">MATERIAL DE ESTUDIO</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw] cursor-pointer" onClick={() => setCurrentView('grades')}>
                        <img className="h-[2.4vw] w-[3vw]" src={hat}/>
                        <h1 className="text-[0.7vw] relative bottom-[0.7vw] text-[#016FB4]">CALIFICACIONES</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw] cursor-pointer" onClick={() => setCurrentView('liveSession')}>
                        <img className="h-[2.5vw] w-[3vw]" src={video}/>
                        <h1 className="text-[0.7vw] relative bottom-[0.7vw] text-[#016FB4]">LIVE</h1>
                    </div>
                    <div className="flex flex-col items-center h-[4vw] p-[0.2vw] cursor-pointer" onClick={() => setCurrentView('attendance')}>
                        <img className="h-[2.4vw] w-[3vw]" src={choice}/>
                        <h1 className="text-[0.7vw] relative bottom-[0.7vw] text-[#016FB4]">ASISTENCIA</h1>
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
        <div className="users flex flex-col h-full w-full p-[2vw] gap-[1vw] " >
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full ">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">DASHBOARD</h1>
            </div>
            <ModuleLayout>{views[currentView]}</ModuleLayout>


        </div>
    );
}