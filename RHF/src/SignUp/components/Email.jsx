import { Controller } from 'react-hook-form';
import { Input } from 'antd';

export const Email = ({ label, name, control, errors }) => {
  //* 이메일 정규식: 영문자, 숫자, 점(.), 밑줄(_), 하이픈(-)으로 시작하고,
  //* @ 기호 뒤에 영문자 또는 숫자, 밑줄, 하이픈이 오며,
  //* 마지막에는 마침표(.) 다음에 최소 2개의 영문자로 구성된 도메인이 와야 함
  const isValidEmail = email => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z]{2,})+$/.test(email);
  };

  return (
    <section>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'email을 써 주세요',
          },
          validate: email =>
            isValidEmail(email) ||
            '@를 포함하여 올바른 이메일 형식으로 써 주세요.',
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
              <Input
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
