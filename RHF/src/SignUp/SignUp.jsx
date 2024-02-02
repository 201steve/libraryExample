import { useForm } from 'react-hook-form';
import { Email } from './components/Email.jsx';
import { Name } from './components/Name.jsx';
import '../App.css';
import { loginServices } from './service/loginServices.js';
import { PasswordInput } from './components/Password.jsx';

const SignUp = () => {
  const SIGNUP_FORM = {
    nickname: '',
    email: '',
    password: '',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ defaultValues: SIGNUP_FORM });
  const submitInquiry = async formData => {
    console.log(formData);

    //* Component에서는 instance에 필요한 값만 보내고, response 처리
    try {
      const response = await loginServices.signUp(formData);
      console.log(response);
    } catch (error) {
      if (error) {
        setError('email', {
          type: 'manual',
          message: '이미 존재하는 이메일 입니다',
        });
      }
    }
  };

  return (
    <div>
      <h1>RHF Example</h1>
      <form onSubmit={handleSubmit(submitInquiry)}>
        <Name
          name="nickname"
          control={control}
          errors={errors}
          label="닉네임"
        />
        <Email name="email" control={control} errors={errors} label="이메일" />
        <PasswordInput
          name="password"
          control={control}
          errors={errors}
          label="비밀번호"
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
