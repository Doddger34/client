import React from 'react';

import { useQuery } from '@apollo/client';
import { GetLessonQuery } from "../queries/index";

const ListLesson = ({ SetlessonId }) => {
    const { data, loading, error } = useQuery(GetLessonQuery);
    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata</div>;
    return(
        <select required={true}  className="form-control select" onChange={e => SetlessonId(e.target.value)} >
            <option selected disabled={true} >Ders Seçin</option>
            {
                data.Lessons.map(data => (
                    <option key={data.id} value={data.id} required={true} >
                        {data.Name}
                    </option>
                ))
            }
        </select>
    )
}
export default ListLesson;