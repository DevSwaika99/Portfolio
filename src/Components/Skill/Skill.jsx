import React from 'react';
import Footlink from '../Footlink/Footlink';
import Header from '../Header/Header';
import { skillList } from './../../assets/skillsData';
import './Skill.css';
import skillsVector from './../../assets/skills_vector.png';
import SkillCard from './SkillCard';

const Skill = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Skills.'
                details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
            />

            <div className='skill-card-container'>
                {skillList.map(({ skillName, skillUrl }) => (
                    <SkillCard skillName={skillName} skillUrl={skillUrl} />
                ))}
            </div>

            <Footlink phrase='Get in ' link='touch.' toAdress='/contact' />

            <div className='skills-vector-frame'>
                <img
                    src={skillsVector}
                    alt='skills'
                    className='skills-vector'
                />
            </div>
        </div>
    );
};

export default Skill;