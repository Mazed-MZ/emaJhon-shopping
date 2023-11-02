import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MatchData from './MatchData';
import './Match.css';

export default function Match() {
    const data = useLoaderData();
    console.log(data)
  return (
    <div className='match-container'>
      {
        data.teams.map(match => <MatchData key={match.idTeam} match={match} ></MatchData>)
      }
    </div>
  )
}
