interface Course {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const courses: Course[] = [
  {
    title: 'Practical Express: mastering backend development (WIP)',
    description: `Master your Node.js/Express.js knowledge from the ground up to senior level with this course.
    Develop and deploy a well-architected production ready application written in Typescript.`,
    imgSrc: '/static/images/course/node.png',
    href: '',
  },
  {
    title: 'Practical React: mastering frontend development (WIP)',
    description: `Master your React.js knowledge from the ground up to senior level with this course.
    Develop and deploy a well-architected production ready application written in Typescript.`,
    imgSrc: '/static/images/course/react.png',
    href: '',
  },
  {
    title: 'Practical Microservices: mastering fullstack development (WIP)',
    description: `Master your Docker/fullstack/Kubernetes knowledge from the ground up to senior level with this course.
    Develop and deploy a well-architected production ready microservices written in Typescript.`,
    imgSrc: '/static/images/course/docker.png',
    href: '',
  },
]

export default courses
