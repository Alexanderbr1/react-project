import { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

interface DataType {
  country: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Страна',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Название учебного заведения',
    dataIndex: 'name',
    key: 'name',
  },
]
const App = () => {

  const LIMIT_LIST_SCHOOL = 10;

  const getUniversity = async (limit: number, page: number) => {
    const offset = page * LIMIT_LIST_SCHOOL;
    const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`);
    return response.data;
  }

  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    getUniversity(LIMIT_LIST_SCHOOL, page - 1).then((data) => setData(data))
  }, [page])

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false}/>
      <div className="buttons__wrapper">
        <Button onClick={(() => setPage(page - 1))} disabled={!(page - 1)}>Назад</Button>
        <Button>{ page }</Button>
        <Button onClick={(() => setPage(page + 1))}>Вперед</Button>
      </div>
    </>
  )
}

export default App;