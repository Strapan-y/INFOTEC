import edit from '../../../assets/img/edit.svg';
import delet from '../../../assets/img/baseline-delete.svg';
import { Input, Progress } from "antd"
import { useForm } from "react-hook-form"

export const OnlineExam: React.FC = () => {
    const { Search } = Input;

    const onChange = (checked: boolean) => {
        console.log(`switch to ${false}`);
    };

    const {
        register: registercontrolEmpresaData,
        setValue: setValueEmpresaData,
        watch: watchEmpresaData,
        control: controlEmpresaData,
        formState: { errors: errorsEmpresaData },
    } = useForm({
        defaultValues: {
            documentType: '',
            nit: '',
            name: '',
            suscription: '',
            telefono: '',
            documentText: '',
            nationality: '',
            idNumber: '',
            historyNumber: '',
            department: '',
            municipality: '',
            subdistrict: '',
            neighborhood: '',
            cellphone: '',
            email: '',
            patientProfession: ''
        }
    })

    return (
        <div className="flex flex-col items-center justify-start h-full p-[2vw] w-full">
            <div className="flex items-center justify-center h-full pt-[1vw] w-[full] bg-opacity-35 gap-[2%]">
                <div className="bg-[white] rounded-lg shadow-lg min-h-[85%] max-h-[90%] w-[full] p-[1vw] overflow-auto border-2 border-solid border-[#F3F3F3]">
                    <table className="table-auto w-full text-center">
                        <thead>
                            <tr className="border-b-2 border-solid border-gray-200 text-[#016FB4]">
                                <th className="p-4">#</th>
                                <th className="p-4">ESTADO</th>
                                <th className="p-4">TITULO</th>
                                <th className="p-4">FECHA</th>
                                <th className="p-4">PREGUNTAS</th>
                                <th className="p-4">OPCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-2 border-solid border-gray-200 text-[0B0C0C] hover:bg-gray-50">
                                <td className="p-4">1</td>
                                <td className="p-4">000000251</td>
                                <td className="p-4">PROYECTANDO</td>
                                <td className="p-4">000000251</td>
                                <td className="p-4">WWWWWWWWW</td>
                                <td className="p-4 flex justify-center items-center gap-2 cursor-pointer">
                                    <img className="w-[1vw]" src={edit} alt="Edit"/>
                                    <img className="w-[1vw]" src={delet} alt="Delete" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};