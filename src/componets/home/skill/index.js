import './skill.css'


import { SkillsData } from '../../../data/skills'

console.log(SkillsData);
export default function Skills(params) {
    return (
        <div className='skills-gral'>
            <h1>Skills</h1>
            <div>
                {SkillsData.map((item, index) =>
                    <div key={index}>
                        <h3    style={{marginLeft: "120px"}} >{item.type}</h3>
                        <div className='card-icon '>
                            {
                                item.list.map((list, indice) =>
                                    <div className='skill-card' key={indice}>
                                        <div className='icon-size'>{list.icon}</div>
                                        <div>{list.name}</div>
                                        
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}