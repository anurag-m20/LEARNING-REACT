import Card from './components/CardTemp'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      name: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      name: "Microsoft",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Hyderabad, India"
    },

  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "7 days ago",
    post: "Software Development Engineer",
    tag: "Full Time",
    tag2: "Entry Level",
    pay: "$40/hour",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "1 day ago",
    post: "iOS Software Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$46/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    name: "Adobe",
    datePosted: "4 days ago",
    post: "Frontend Developer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Software Engineer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    name: "IBM",
    datePosted: "8 days ago",
    post: "Cloud Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$36/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    name: "Salesforce",
    datePosted: "3 days ago",
    post: "React Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$44/hour",
    location: "Hyderabad, India"
  }
];

console.log(jobOpenings)

  return (
    <div className='parent'>

      {jobOpenings.map(function(element) {

        return (
          <Card
            key={element.name}
            company={element.name}
            post={element.post}
          />
        )

      })}

    </div>
  )
}

export default App