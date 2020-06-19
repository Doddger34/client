import React from "react";
import PropTypes from "prop-types";
import NCard from "../component/Nt_Card";
import "../Style/Notes.css";
import { useQuery } from '@apollo/client';

import { GetNotesQuery } from '../queries/index';


const Not = () => {
  const { loading, data, error } = useQuery(GetNotesQuery);
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
                />
            )
        })
      }
    </div>
  );
};

Not.prototypes = {
  id: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
};
export default Not;
