import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Controller, useForm } from "react-hook-form";
import PdfTemplate from "../../components/PdfTemplate/PdfTemplate.tsx";
import { Alert, Button, Input } from "antd";
import styled from "styled-components";

interface IPdfForm {
  name: string;
  picture: string;
}

const FormWrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const PdfGenerator = () => {
  const [task, setTask] = useState<IPdfForm>();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IPdfForm>({
    mode: "onBlur",
  });

  const saveElement = (data: IPdfForm) => {
    setTask(data);
  };

  return (
    <>
      <FormWrapper>
        <form onSubmit={handleSubmit(saveElement)}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Name" onBlur={onBlur} onChange={onChange} value={value} />
            )}
            name="name"
          />
          {errors?.name && <Alert message="Поле обязательно для заполнения" type="error" showIcon />}

          <input
            type="file"
            accept="image/*"
            {...register("picture", {
              required: "Поле обязательно для заполнения",
            })}
          />

          {errors?.picture && <Alert message={errors.picture?.message} type="error" showIcon />}
          <Button type="primary" htmlType="submit" disabled={!isValid}>
            Сохранить
          </Button>
        </form>
        {!!task?.name && (
          <PDFDownloadLink document={<PdfTemplate name={task.name} picture={task.picture} />} fileName="file.pdf">
            {({ blob, url, loading, error }) => (loading ? "Загрузка..." : "Скачать")}
          </PDFDownloadLink>
        )}
      </FormWrapper>
    </>
  );
};

export default PdfGenerator;
