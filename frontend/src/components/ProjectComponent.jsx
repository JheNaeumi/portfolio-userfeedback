import React from 'react'

  const ProjectComponent = () => {
    const posts = [
      {
        id: 1,
        title: 'University Chabot Service',
        description:'Worked on team to develop a web-based Chatbot for a university project, collecting, clearning & augmenting data. Integrated Open LLM using Langchain. ',
        technology: {
          language: 'Python, JavaScript, HTML & CSS',
          frameworks: 'Tensorflow, Flask'
          }
      },
      {
        id: 2,
        title: 'Project Landslide',
        description: 'Developed a mobile application featuring a lightweight model to detect post-landslide occurrences. Collaborated with the Mines and Geosciences Bureau to enhance project insight.',
        technology: {
          language: 'Java & Python',
          frameworks: 'Android Studio & Tensorflow'
          }
      },
      {
        id: 3,
        title: 'Employee Management System',
        description:'Learned a new stack based on my experience in java creating a web-based application designed to add, edit & delete employee basic information.',
        technology: {
          language: 'Java, SQL, JavaScript, HTML & CSS',
          frameworks: 'Spring Boot, Vite & TailwindCSS'
          }
      },
      {
        id: 4,
        title: 'Blogpost OnlyFriends',
        description:'Explore further enhancements and functionalities in Spring Boot, including implementations like Spring Security, JWT, Starter Mail, Rate limiting, and more.',
        technology: {
          language: 'Java, SQL, JavaScript, HTML & CSS',
          frameworks: 'Spring Boot, Vite & TailwindCSS'
          }
      },
      {
        id: 5,
        title: 'Simple CRUD .NET',
        description:'I created and learned a new stack using .NET for an exam application, as web applications are similarly structured',
        technology: {
          language: 'C#, SQL, JavaScript, HTML & CSS',
          frameworks: '.Net, Vite & TailwindCSS'
          }
      },
      // More posts...
    ]
    return ( 
      <section id = "project">
        <div className="bg-gradient-to-b from-[#A6B1E1] to-[#DCD6F7] py-24 sm:py-32 rounded-t-lg">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className=" rounded-lg mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                 Discover highlights from my projects
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="bg-[#F1EAFF] hover:bg-[#DCF2F1] flex max-w-2xl flex-col items-center justify-between border border-gray-900 rounded-lg shadow">
                  <div className="group relative">
                    <h3 className="mt-3 ml-3 mr-3 text-lg font-semibold leading-6 text-gray-900">
                        {post.title}
                    </h3>
                    <p className="flex mt-5 ml-5 mr-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="flex mt-8 ml-5 mr-5 items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                          {post.technology.language}
                      </p>
                      <p className="text-gray-600">{post.technology.frameworks}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

    )

}
  
export default ProjectComponent
  