import { Controller } from 'react-hook-form';
import { Input } from 'antd';

export const Name = ({ label, name, control, errors }) => {
  const isValidName = name => {
    return /^[가-힣a-zA-Z0-9\s]{0,30}$/.test(name);
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
            message: '닉네임을 써 주세요',
          },
          validate: {
            length: value => value?.trim().length > 1 || '2자 이상 써 주세요.',
            value: name => isValidName(name) || '한글, 영어, 숫자로 써 주세요.',
          },
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
                onChange={e => field.onChange(e.target.value.trim())}
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
