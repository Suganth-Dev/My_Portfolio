import todoapp from '../assets/todo.jpg'
import ecommerce from '../assets/ecommerce.jpg'
import ongoing from '../assets/coming soon.jpg'


export default function Projects(){
    const config = {
        projects : [
            
            {
                image: ecommerce,
                description: 'E-commerce website SS-Techayo shop. Built with html, css ,javascript and react.js',
                link: 'https://suganth-dev.github.io/S-S_Techayo-shop/',
            },
            {
                image: todoapp,
                description: 'This is Todo App. Built with html, css, javascript and React.js.',
                link: 'https://github.com/Suganth-Dev/To-Do-list-App/tree/main/todolist',
            },
            {
                image: ongoing,
                description: 'Project Comming Soon!.',
                link: '',
            }
        ]

    }




    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white ">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
            <p>These are some of my best projects. I have built these with Html, Css , javascript, Tailwind Css and React.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                    <a href= {project.link}>
                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} />
                        <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{project.description}</p>
                        
                        <div className='flex justify-center'>
                            <a  className='btn' target='blank' href={project.link}>
                                View Project
                            </a>
                        </div>
                        </div>
                    </div>
                    </a>
            ))}
            </div>
        </div>
    </section>
}