import React from 'react';

import { useQuery } from '@apollo/client';
import { GetClass } from "../queries/index";

const ListClass = ({ ClassId, SetClassId }) => {
    const { data, loading, error } = useQuery(GetClass);
    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata</div>;
    return(
        <select className="form-control select" onChange={e => SetClassId(e.target.value)} >
            <option selected disabled={true}>Sınıf Seçiniz</option>
            {
                data.Classes.map(data => (
                    <option key={data.id} value={data.id}  >
                        {data.ClassName}
                    </option>
                ))
            }
        </select>
    )
}
export default ListClass;