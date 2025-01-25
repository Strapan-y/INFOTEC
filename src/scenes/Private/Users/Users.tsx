import edit from '../../../assets/img/edit.svg';
import delet from '../../../assets/img/baseline-delete.svg';
import { AutoComplete, Input, Modal, Switch } from "antd";
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { departments } from '../../../common/Jsons/DepartmentsJson';
import { Suscription } from '../../../common/Jsons/SuscriptionJson';

const { Search } = Input;

export const Users = () => {
    const [isModalRegistroUser, setIsModalRegistroUser] = useState(false);
    const [isModalRegistro, setIsModalRegistro] = useState(false);
    const [isModalHistory, setIsModalHistory] = useState(false);
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: { target: { value: string; }; }, name: any) => {
        const value = e.target.value.replace(/[^0-9]/g, ""); // Permitir solo números
        setValueEmpresaData(name,value); 
    };

    const handleInputKeys = (e: { target: { value: string } }, name: any) => {
        const value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, ""); // Permitir solo letras, espacios y caracteres acentuados
        setValueEmpresaData(name, value);
    };
    

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
        <div className="users flex flex-col h-full w-full gap-[1vw] p-[1vw]">
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">GESTIONAR USUARIOS</h1>
            </div>

            <div className="flex flex-col items-center justify-start h-full p-[2vw] w-full">
                <div className="flex items-start justify-between w-full ">
                    <Search className="custon-search w-[30vw] h-[3vw]" placeholder="Buscar..." enterButton />
                    <div className="flex items-start justify-end w-full">
                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalHistory(true)}>
                            HISTORIAL EMPRESA
                        </button>
                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalRegistro(true)}>
                            CREAR EMPRESA
                        </button>
                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalRegistroUser(true)}>
                            CREAR USUARIO
                        </button>
                    </div>
                </div>
                {/* Contenedor de la tabla */}
                <div className="flex items-center justify-center h-full pt-[3vw] w-full bg-opacity-35 gap-[2%]">
                    <div className="bg-[white] rounded-lg shadow-lg min-h-[85%] max-h-[90%] w-full p-[1vw] overflow-auto">
                        <table className="table-auto w-full text-center">
                            <thead>
                                <tr className="border-b-2 border-solid border-gray-200 text-[#016FB4]">
                                    <th className="p-4">#</th>
                                    <th className="p-4">NIT</th>
                                    <th className="p-4">EMPRESA</th>
                                    <th className="p-4">USUARIO</th>
                                    <th className="p-4">CONTRASEÑA</th>
                                    <th className="p-4">SUSCRIPCIÓN</th>
                                    <th className="p-4">INICIO</th>
                                    <th className="p-4">FIN</th>
                                    <th className="p-4">SELECCIONAR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2 border-solid border-gray-200 text-[0B0C0C] hover:bg-gray-50">
                                    <td className="p-4">1</td>
                                    <td className="p-4">000000251</td>
                                    <td className="p-4">PROYECTANDO</td>
                                    <td className="p-4">000000251</td>
                                    <td className="p-4">WWWWWWWWW</td>
                                    <td className="p-4">BÁSICA</td>
                                    <td className="p-4">23/01/2025</td>
                                    <td className="p-4">23/04/2025</td>
                                    <td className="p-4 flex justify-center items-center gap-2 cursor-pointer">
                                        <img className="w-[1vw]" src={edit} alt="Edit" onClick={() => setIsModalEdit(true)} />
                                        <img className="w-[1vw]" src={delet} alt="Delete" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <Modal title="HISTORIAL EMPRESAS" open={isModalHistory} footer={null} onCancel={() => setIsModalHistory(false)} width="45vw">
                    <div className="border-t-[0.2vw] flex justify-center items-center border-solid border-gray-100 w-full h-full pt-[1vw] gap-4">
                        <div className="bg-[white] rounded-lg shadow-lg min-h-[85%] max-h-[90%] w-full p-[1vw] overflow-auto">
                            <table className="table-auto w-full max-w-full text-center border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-solid border-gray-200 text-[#016FB4]">
                                        <th className="p-4">#</th>
                                        <th className="p-4">NIT</th>
                                        <th className="p-4">EMPRESA</th>
                                        <th className="p-4">USUARIO</th>
                                        <th className="p-4">SELECCIONAR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b-2 border-solid border-gray-200 text-[#0B0C0C] hover:bg-gray-50">
                                        <td className="p-4">1</td>
                                        <td className="p-4">000000251</td>
                                        <td className="p-4">PROYECTANDO</td>
                                        <td className="p-4">000000251</td>
                                        <td className="p-4 flex justify-center items-center gap-2 cursor-pointer">
                                            <Switch defaultChecked onChange={onChange} />
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className="border-b-2 border-solid border-gray-200 text-[#0B0C0C] hover:bg-gray-50">
                                        <td className="p-4">1</td>
                                        <td className="p-4">000000251</td>
                                        <td className="p-4">PROYECTANDO</td>
                                        <td className="p-4">000000251</td>
                                        <td className="p-4 flex justify-center items-center gap-2 cursor-pointer">
                                            <Switch defaultChecked onChange={onChange} />
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </Modal>

                <Modal title="REGISTRAR EMPRESA" width={"40vw"} open={isModalRegistro} footer={null} onCancel={() => setIsModalRegistro(false)}>
                    <div className='border-t-[0.2vw] justify-center border-solid border-gray-100 w-full flex flex-wrap pt-[1vw] gap-4'>
                        <div>
                            <h1 className='p-1 px-3'>NIT</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("nit", {})}
                                onChange={(e) => handleInputChange(e, "nit")}
                                value={watchEmpresaData("nit")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>NOMBRE</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("name", {})}
                                onChange={(e) => handleInputKeys(e, "name")}
                                value={watchEmpresaData("name")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">SUSCRIPCION <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <Controller
                                name="suscription"
                                control={controlEmpresaData}
                                render={({ field }) => (
                                    <AutoComplete
                                        value={inputValue || selectedLabel}
                                        className="select h-[2vw] custom-selector"
                                        style={{ width: "10.3vw", borderRadius: '0.5vw' }}
                                        placeholder="Seleccione"
                                        options={Suscription.map((suscri) => ({
                                            value: suscri.id,
                                            label: suscri.name,
                                        }))}
                                        onSelect={(value, option) => {
                                            setSelectedLabel(option.label as string); // Establecemos el label
                                            setInputValue(""); // Limpiamos el input ya que el valor seleccionado es ahora el que se muestra
                                            setValueEmpresaData("suscription", value); // Guardamos el id (value) para enviarlo al backend
                                        }}
                                        onChange={(data) => {
                                            setInputValue(data);
                                            setSelectedLabel("");
                                        }}
                                        filterOption={(inputValue, option) =>
                                            option
                                                ? String(option.value)
                                                    .toUpperCase()
                                                    .indexOf(inputValue.toUpperCase()) !== -1
                                                : false
                                        }
                                        onBlur={() => {
                                            const selectedOption = Suscription.find(
                                                (suscri) =>
                                                    String(suscri.id) === watchEmpresaData("suscription")
                                            );
                                            if (selectedOption === undefined) {
                                                setValueEmpresaData("suscription", "");
                                                setSelectedLabel("");
                                            }
                                        }}
                                    />
                                )}
                            />

                            {errorsEmpresaData.department && <p className='errorMessage relativeTop'>{errorsEmpresaData.department.message}</p>}
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">DEPARTAMENTO <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <Controller
                                name="department"
                                control={controlEmpresaData}
                                render={({ field }) => (
                                    <AutoComplete
                                        {...field}
                                        value={watchEmpresaData('department')}
                                        className="select h-[2vw] custom-selector"
                                        style={{ width: '10.3vw', borderRadius: '0.5vw' }}
                                        placeholder="Seleccione"
                                        options={departments.map((department) => ({
                                            value: department.department,
                                            label: department.department,
                                        }))}
                                        filterOption={(inputValue, option) =>
                                            option ? option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 : false
                                        }
                                        onBlur={() => {
                                            const selectedOption = departments.find((department) => department.department === watchEmpresaData('department'));
                                            if (selectedOption === undefined) {
                                                setValueEmpresaData('department', '');
                                            } else {
                                                /* setValuePersonalData('sexText', selectedOption); */
                                            }
                                        }}
                                    />
                                )}
                            />

                            {errorsEmpresaData.department && <p className='errorMessage relativeTop'>{errorsEmpresaData.department.message}</p>}
                        </div>

                        <div className="selectDiv">
                            <h1 className="pSelect p-1 px-3">MUNICIPIO <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <Controller
                                name="municipality"
                                control={controlEmpresaData}
                                rules={{
                                    validate: (value) => {
                                        const errors = [];
                                        if (!value || value.trim() === '') {
                                            errors.push("Municipio es requerido");
                                        }
                                        return errors.length === 0 || errors.join(', ');
                                    },
                                }}
                                render={({ field }) => (
                                    <AutoComplete
                                        {...field}
                                        value={watchEmpresaData('municipality')}
                                        className="select h-[2vw] custom-selector"
                                        style={{ width: "10.3vw", borderRadius: '0.5vw' }}
                                        placeholder="Seleccione"
                                        options={
                                            watchEmpresaData('department')
                                                ? departments
                                                    .find(dep => dep.department === watchEmpresaData('department'))
                                                    ?.municipalities.map(municipality => ({
                                                        value: municipality,
                                                        label: municipality,
                                                    })) ?? []
                                                : []
                                        }
                                        filterOption={(inputValue, option) =>
                                            option ? option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 : false
                                        }
                                        onBlur={() => {
                                            const selectedOption = departments
                                                .find(dep => dep.department === watchEmpresaData('department'))
                                                ?.municipalities.find((municipality) => municipality === watchEmpresaData('municipality'));
                                            if (selectedOption === undefined) {
                                                setValueEmpresaData('municipality', '');
                                            } else {
                                                /* setValueEmpresaData('sexText', selectedOption); */
                                            }
                                        }}
                                    />
                                )}
                            />
                            {errorsEmpresaData.municipality && <p className='errorMessage relativeTop'>{errorsEmpresaData.municipality.message}</p>}
                        </div>

                        <div>
                            <h1 className='p-1 px-3'>TELEFONO</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("telefono", {})}
                                onChange={(e) => handleInputChange(e, "telefono")}
                                value={watchEmpresaData("telefono")}
                                placeholder="Escribe el numero"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>DIRECCION</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">CORREO ELECTRONICO<label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="email"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>CONTRASEÑA</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>

                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalRegistro(true)}>
                            CREAR EMPRESA
                        </button>


                    </div>
                </Modal>

                <Modal title="REGISTRAR USUARIO" width={"40vw"} open={isModalRegistroUser} footer={null} onCancel={() => setIsModalRegistroUser(false)}>
                    <div className='border-t-[0.2vw] justify-center border-solid border-gray-100 w-full flex flex-wrap pt-[1vw] gap-4'>
                        <div>
                            <h1 className='p-1 px-3'>NOMBRE</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("name", {})}
                                onChange={(e) => handleInputKeys(e, "name")}
                                value={watchEmpresaData("name")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>TIPO DOCUMENTO</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("nit", {})}
                                onChange={(e) => handleInputChange(e, "nit")}
                                value={watchEmpresaData("nit")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>NO. DOCUMENTO</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("nit", {})}
                                onChange={(e) => handleInputChange(e, "nit")}
                                value={watchEmpresaData("nit")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">ROL <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <Controller
                                name="suscription"
                                control={controlEmpresaData}
                                render={({ field }) => (
                                    <AutoComplete
                                        value={inputValue || selectedLabel}
                                        className="select h-[2vw] custom-selector"
                                        style={{ width: "10.3vw", borderRadius: '0.5vw' }}
                                        placeholder="Seleccione"
                                        options={Suscription.map((suscri) => ({
                                            value: suscri.id,
                                            label: suscri.name,
                                        }))}
                                        onSelect={(value, option) => {
                                            setSelectedLabel(option.label as string); // Establecemos el label
                                            setInputValue(""); // Limpiamos el input ya que el valor seleccionado es ahora el que se muestra
                                            setValueEmpresaData("suscription", value); // Guardamos el id (value) para enviarlo al backend
                                        }}
                                        onChange={(data) => {
                                            setInputValue(data);
                                            setSelectedLabel("");
                                        }}
                                        filterOption={(inputValue, option) =>
                                            option
                                                ? String(option.value)
                                                    .toUpperCase()
                                                    .indexOf(inputValue.toUpperCase()) !== -1
                                                : false
                                        }
                                        onBlur={() => {
                                            const selectedOption = Suscription.find(
                                                (suscri) =>
                                                    String(suscri.id) === watchEmpresaData("suscription")
                                            );
                                            if (selectedOption === undefined) {
                                                setValueEmpresaData("suscription", "");
                                                setSelectedLabel("");
                                            }
                                        }}
                                    />
                                )}
                            />

                            {errorsEmpresaData.department && <p className='errorMessage relativeTop'>{errorsEmpresaData.department.message}</p>}
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">DEPARTAMENTO <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <Controller
                                name="department"
                                control={controlEmpresaData}
                                render={({ field }) => (
                                    <AutoComplete
                                        {...field}
                                        value={watchEmpresaData('department')}
                                        className="select h-[2vw] custom-selector"
                                        style={{ width: '10.3vw', borderRadius: '0.5vw' }}
                                        placeholder="Seleccione"
                                        options={departments.map((department) => ({
                                            value: department.department,
                                            label: department.department,
                                        }))}
                                        filterOption={(inputValue, option) =>
                                            option ? option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 : false
                                        }
                                        onBlur={() => {
                                            const selectedOption = departments.find((department) => department.department === watchEmpresaData('department'));
                                            if (selectedOption === undefined) {
                                                setValueEmpresaData('department', '');
                                            } else {
                                                /* setValuePersonalData('sexText', selectedOption); */
                                            }
                                        }}
                                    />
                                )}
                            />

                            {errorsEmpresaData.department && <p className='errorMessage relativeTop'>{errorsEmpresaData.department.message}</p>}
                        </div>

                        <div className="selectDiv">
                            <h1 className="pSelect p-1 px-3">MUNICIPIO <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <Controller
                                name="municipality"
                                control={controlEmpresaData}
                                rules={{
                                    validate: (value) => {
                                        const errors = [];
                                        if (!value || value.trim() === '') {
                                            errors.push("Municipio es requerido");
                                        }
                                        return errors.length === 0 || errors.join(', ');
                                    },
                                }}
                                render={({ field }) => (
                                    <AutoComplete
                                        {...field}
                                        value={watchEmpresaData('municipality')}
                                        className="select h-[2vw] custom-selector"
                                        style={{ width: "10.3vw", borderRadius: '0.5vw' }}
                                        placeholder="Seleccione"
                                        options={
                                            watchEmpresaData('department')
                                                ? departments
                                                    .find(dep => dep.department === watchEmpresaData('department'))
                                                    ?.municipalities.map(municipality => ({
                                                        value: municipality,
                                                        label: municipality,
                                                    })) ?? []
                                                : []
                                        }
                                        filterOption={(inputValue, option) =>
                                            option ? option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 : false
                                        }
                                        onBlur={() => {
                                            const selectedOption = departments
                                                .find(dep => dep.department === watchEmpresaData('department'))
                                                ?.municipalities.find((municipality) => municipality === watchEmpresaData('municipality'));
                                            if (selectedOption === undefined) {
                                                setValueEmpresaData('municipality', '');
                                            } else {
                                                /* setValueEmpresaData('sexText', selectedOption); */
                                            }
                                        }}
                                    />
                                )}
                            />
                            {errorsEmpresaData.municipality && <p className='errorMessage relativeTop'>{errorsEmpresaData.municipality.message}</p>}
                        </div>

                        <div>
                            <h1 className='p-1 px-3'>TELEFONO</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("telefono", {})}
                                onChange={(e) => handleInputChange(e, "telefono")}
                                value={watchEmpresaData("telefono")}
                                placeholder="Escribe el numero"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>DIRECCION</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">CORREO ELECTRONICO<label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="email"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>CONTRASEÑA</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>

                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalRegistro(true)}>
                            CREAR USUARIO
                        </button>


                    </div>
                </Modal>


                <Modal title="EDITAR EMPRESA" width={"40vw"} open={isModalEdit} footer={null} onCancel={() => setIsModalEdit(false)}>
                    <div className='border-t-[0.2vw] justify-center border-solid border-gray-100 w-full flex flex-wrap pt-[1vw] gap-4'>
                        <div>
                            <h1 className='p-1 px-3'>NIT</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="number"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>NOMBRE</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">SUSCRIPCION <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <Controller
                                name="suscription"
                                control={controlEmpresaData}
                                render={({ field }) => (
                                    <AutoComplete
                                        value={inputValue || selectedLabel}
                                        className="select h-[2vw] custom-selector"
                                        style={{ width: "10.3vw", borderRadius: '0.5vw' }}
                                        placeholder="Seleccione"
                                        options={Suscription.map((suscri) => ({
                                            value: suscri.id,
                                            label: suscri.name,
                                        }))}
                                        onSelect={(value, option) => {
                                            setSelectedLabel(option.label as string); // Establecemos el label
                                            setInputValue(""); // Limpiamos el input ya que el valor seleccionado es ahora el que se muestra
                                            setValueEmpresaData("suscription", value); // Guardamos el id (value) para enviarlo al backend
                                        }}
                                        onChange={(data) => {
                                            setInputValue(data);
                                            setSelectedLabel("");
                                        }}
                                        filterOption={(inputValue, option) =>
                                            option
                                                ? String(option.value)
                                                    .toUpperCase()
                                                    .indexOf(inputValue.toUpperCase()) !== -1
                                                : false
                                        }
                                        onBlur={() => {
                                            const selectedOption = Suscription.find(
                                                (suscri) =>
                                                    String(suscri.id) === watchEmpresaData("suscription")
                                            );
                                            if (selectedOption === undefined) {
                                                setValueEmpresaData("suscription", "");
                                                setSelectedLabel("");
                                            }
                                        }}
                                    />
                                )}
                            />

                            {errorsEmpresaData.department && <p className='errorMessage relativeTop'>{errorsEmpresaData.department.message}</p>}
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">DEPARTAMENTO <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <Controller
                                name="department"
                                control={controlEmpresaData}
                                render={({ field }) => (
                                    <AutoComplete
                                        {...field}
                                        value={watchEmpresaData('department')}
                                        className="select h-[2vw] custom-selector"
                                        style={{ width: '10.3vw', borderRadius: '0.5vw' }}
                                        placeholder="Seleccione"
                                        options={departments.map((department) => ({
                                            value: department.department,
                                            label: department.department,
                                        }))}
                                        filterOption={(inputValue, option) =>
                                            option ? option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 : false
                                        }
                                        onBlur={() => {
                                            const selectedOption = departments.find((department) => department.department === watchEmpresaData('department'));
                                            if (selectedOption === undefined) {
                                                setValueEmpresaData('department', '');
                                            } else {
                                                /* setValuePersonalData('sexText', selectedOption); */
                                            }
                                        }}
                                    />
                                )}
                            />

                            {errorsEmpresaData.department && <p className='errorMessage relativeTop'>{errorsEmpresaData.department.message}</p>}
                        </div>

                        <div className="selectDiv">
                            <h1 className="pSelect p-1 px-3">MUNICIPIO <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <Controller
                                name="municipality"
                                control={controlEmpresaData}
                                rules={{
                                    validate: (value) => {
                                        const errors = [];
                                        if (!value || value.trim() === '') {
                                            errors.push("Municipio es requerido");
                                        }
                                        return errors.length === 0 || errors.join(', ');
                                    },
                                }}
                                render={({ field }) => (
                                    <AutoComplete
                                        {...field}
                                        value={watchEmpresaData('municipality')}
                                        className="select h-[2vw] custom-selector"
                                        style={{ width: "10.3vw", borderRadius: '0.5vw' }}
                                        placeholder="Seleccione"
                                        options={
                                            watchEmpresaData('department')
                                                ? departments
                                                    .find(dep => dep.department === watchEmpresaData('department'))
                                                    ?.municipalities.map(municipality => ({
                                                        value: municipality,
                                                        label: municipality,
                                                    })) ?? []
                                                : []
                                        }
                                        filterOption={(inputValue, option) =>
                                            option ? option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 : false
                                        }
                                        onBlur={() => {
                                            const selectedOption = departments
                                                .find(dep => dep.department === watchEmpresaData('department'))
                                                ?.municipalities.find((municipality) => municipality === watchEmpresaData('municipality'));
                                            if (selectedOption === undefined) {
                                                setValueEmpresaData('municipality', '');
                                            } else {
                                                /* setValueEmpresaData('sexText', selectedOption); */
                                            }
                                        }}
                                    />
                                )}
                            />
                            {errorsEmpresaData.municipality && <p className='errorMessage relativeTop'>{errorsEmpresaData.municipality.message}</p>}
                        </div>

                        <div>
                            <h1 className='p-1 px-3'>TELEFONO</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>DIRECCION</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">CORREO ELECTRONICO<label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>CONTRASEÑA</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>

                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalRegistro(true)}>
                            EDITAR EMPRESA
                        </button>


                    </div>
                </Modal>
            </div >
        </div >
    )
}

