import { Form, Input } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthSelectors } from '../../../services/Auth/AuthSelectors'
import { authActions } from '../../../services/Auth/AuthSlice'
import { useAppDispatch } from '../../../store/Store'
import { useForm } from 'react-hook-form'
import { TRUE } from 'sass'

const { Item } = Form
const { Password } = Input

const Login = () => {
  const [windowSize, setWindowSize] = useState(window.innerHeight);

  const dispatch = useAppDispatch()
  const { status, error, authe } = useAuthSelectors()

  const navigate = useNavigate()

  const defaultValues = useMemo(() => {
    return {
      "username": "",
      "password": "",
    }
  }, []);

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    setValue: setValueLogin,
    watch: watchLogin,
    control: controlLogin,
    formState: { errors: errorsLogin },
    trigger: triggerLogin,
  } = useForm({
    defaultValues
  })

  /* useEffect(() => {
    status.login === 'error' && dispatch(authActions.resetStatus('login'))
  }, []) */

  return (
    <div className='flex justify-end items-start w-screen p-4 login'>
      < button
        className="bg-[white] p-[1vw] shadow text-[#016FB4] rounded-[5px] "
        onClick={() => {
          localStorage.setItem("accessToken", "true")
          window.location.reload()
        }}>
        Ingresar
      </button>

      {/* Login"---Aqui lo demas----" */}
    </div>
  )
}

export default Login