import { Controller } from 'react-hook-form';
import { Input } from 'antd';

export const PasswordInput = ({ name, control, errors, label }) => {
  const isValidPassword = password => {
    return /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  };
  return (
    <section>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: { value: true, message: '비밀번호를 써 주세요.' },
          validate: password =>
            isValidPassword(password) ||
            '영문, 숫자, 특수문자 조합으로 8자 이상 써 주세요.',
        }}
        render={({ field }) => {
          return (
            <section
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Input.Password
                onChange={e => field.onChange(e.target.value)}
                status={errors[name] ? 'error' : ''}
                size="large"
              />
              {errors[name] && (
                <div
                  style={{
                    backgroundColor: '#fff',
                    color: 'red',
                    width: '200px',
                    borderRadius: '10px',
                    marginTop: '10px',
                  }}
                >
                  {errors[name]?.message}
                </div>
              )}
            </section>
          );
        }}
      />
    </section>
  );
};
