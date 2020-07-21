import React from "react";

import NCard from "../component/Nt_Card";
import { useQuery } from '@apollo/client';
import { GetNotesQuery } from '../queries/index';

import "../Style/Notes.css";

const Notlar = () => {
  const { loading, data, error } = useQuery(GetNotesQuery);
  console.log(data);
  if (loading) return <p style={{textAlign:'center'}}>Loading...</p>;
  if (error) return <p style={{textAlign:'center'}}>Error...</p>;
  return(
    <div>
      {
        data.Notes.map(data => {
            return(
                <NCard 
                  key= { data.id }
                  Name = { data.Name }
                  Link = { data.Link }
                  Ders = { data.Lesson.Name }
                  UserName= { data.User.UserName }
                />
            )
        })
      }
    </div>
  );

}

export default Notlar;
