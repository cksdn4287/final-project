import { useParams  , useNavigate , useSearchParams , createSearchParams} from "react-router-dom";
import { useCallback } from "react";

const ReadPage = () => {

  const {tno} = useParams()  //  {  tno : "100"}

  const navigate = useNavigate()

  const [queryParams] = useSearchParams()

  const page = queryParams.get("page")  ? parseInt(queryParams.get("page")) : 1
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

  const queryStr = createSearchParams({page,size}).toString()

  const moveToModify = useCallback((tno) => {
    navigate(    {  
      pathname:`/todo/modify/${tno}` ,
      search:queryStr
    }          )
  } , [tno , page, size , queryStr , navigate])

  const moveToList = useCallback(  () => {
    navigate( {
      pathname : `/todo/list` ,
      search:queryStr
    })
  },[page, size , queryStr, navigate])

  return(
    <div className="text-3xl font-extrabold">
        Toto Read Page Component  {tno}

        <div>
          <button onClick={  () => moveToModify(33)}>Test Modify</button>

          <button onClick={  () => moveToList()}>Test List</button>
        </div>
    </div>
  )
}

export default ReadPage;