import React from 'react'
import Card from './components/Card'
const App = () => {
const jobData = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    companyName: "NVIDIA",
    datePosted: "1 day ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    companyName: "Salesforce",
    datePosted: "2 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    companyName: "IBM",
    datePosted: "3 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$43/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    companyName: "Oracle",
    datePosted: "5 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$44/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=intel.com&sz=128",
    companyName: "Intel",
    datePosted: "1 week ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Bengaluru, India"
  }
];


  return (
    <div className='parent'>
      {jobData.map(function(elem,index){
        return <Card key={index} job={elem}/>
      })}
    </div>
  )
}

export default App
