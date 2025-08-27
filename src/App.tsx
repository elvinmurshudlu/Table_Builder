
import './App.css'
import TableBuilder from "./components/TableBuilder/TableBuilder.tsx";
import {TableColumns} from "./TableColumns/TableColumns.tsx";
const mockData = [
    {
        "id": 1,
        "documentNumber": "DOC-2025-001",
        "content": "Maliyyə hesabatı haqqında sənəd",
        "createdBy": {
            "name": "Elvin",
            "surname": "Murşudlu"
        },
        "taskNumber": "T-1001"
    },
    {
        "id": 2,
        "documentNumber": "DOC-2025-002",
        "content": "İşçi müqaviləsi sənədi",
        "createdBy": {
            "name": "Aysel",
            "surname": "Əliyeva"
        },
        "taskNumber": "T-1002"
    },
    {
        "id": 3,
        "documentNumber": "DOC-2025-003",
        "content": "Texniki tapşırıq sənədi",
        "createdBy": {
            "name": "Rauf",
            "surname": "Qasımov"
        },
        "taskNumber": "T-1003"
    },
    {
        "id": 4,
        "documentNumber": "DOC-2025-004",
        "content": "Layihə iclasının protokolu",
        "createdBy": {
            "name": "Nigar",
            "surname": "Hüseynova"
        },
        "taskNumber": "T-1004"
    }
]

function App() {

  return (
   <div className={'grid place-content-center bg-gray-100  h-full '}>
       <TableBuilder rowKey={'id'} dataSource={mockData} columns={[TableColumns.documentNumber(),TableColumns.conditionContent()]}></TableBuilder>
   </div>
  )
}

export default App
