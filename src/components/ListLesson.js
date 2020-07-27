import React from 'react';

import { useQuery } from '@apollo/client';
import { GetLessonQuery } from "../queries/index";

const ListLesson = ({ lessonId, SetlessonId }) => {
    const { data, loading, error } = useQuery(GetLessonQuery);
    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata</div>;
    return(
        <select required  className="form-control select" onChange={e => SetlessonId(e.target.value)} >
            <option selected disabled={true} >Ders Seçin</option>
            {
                data.Lessons.map(data => (
                    <option key={data.id} value={data.id}  >
                        {data.Name}
                    </option>
                ))
            }
        </select>
    )
}
export default ListLesson;