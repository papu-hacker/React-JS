import React from 'react'

const About = () => {
  return (
    <div className="py-30 bg-neutral-900">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 font-mono">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1626968361222-291e74711449?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-200 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-100">
              coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding
            </p>
            <p className="mt-4 text-gray-100">
              coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding coding
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About